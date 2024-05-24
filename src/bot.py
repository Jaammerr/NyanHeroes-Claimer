import asyncio
import uuid

from concurrent.futures import ThreadPoolExecutor
from loguru import logger
from loader import config

from undetected_playwright.async_api import (
    async_playwright,
    Playwright,
    BrowserContext,
    Page,
)
from undetected_playwright._impl._errors import TimeoutError as PlaywrightTimeoutError

from .onchain import OnChain
from .sender.main import send_nyan_tokens
from .phantom import SetupPhantom, path_to_extension


class NyanBot(OnChain):
    def __init__(self, phrase: str):
        super().__init__(phrase)

        self.phrase = phrase
        self.executor = ThreadPoolExecutor()

        self.playwright: Playwright = None  # type: ignore
        self.browser: BrowserContext = None  # type: ignore
        self.page: Page = None  # type: ignore

    async def setup_browser(self):
        self.playwright = await async_playwright().start()
        self.browser = await self.playwright.chromium.launch_persistent_context(
            args=[
                "--disable-blink-features=AutomationControlled",
                f"--disable-extensions-except={path_to_extension}",
                f"--load-extension={path_to_extension}",
            ],
            user_data_dir=f"./Phantom/user_data/{uuid.uuid4()}",
            headless=False,
            proxy={
                "server": config["proxy"]["server"],
                "username": config["proxy"]["username"],
                "password": config["proxy"]["password"],
            },
        )
        self.page = await self.browser.new_page()
        # await self.close_extra_pages()

    async def close_extra_pages(self):
        for _ in range(5):
            extra_pages = self.browser.pages[1:]
            if extra_pages:
                await asyncio.gather(*(page.close() for page in extra_pages))
            await asyncio.sleep(1)
        self.page = self.browser.pages[0]

    async def get_phantom_page(self):
        for _ in range(10):
            phantom_page = next(
                (
                    page
                    for page in self.browser.pages
                    if page.url.startswith("chrome-extension://")
                ),
                None,
            )
            if phantom_page:
                return phantom_page

            await asyncio.sleep(1)
        raise Exception("Phantom page not found")

    async def process_connect_wallet(self):
        try:
            await self.page.wait_for_timeout(2000)
            field = await self.page.wait_for_selector("text=Connect Wallet", timeout=10000)
            await field.click(delay=1000)

            await self.page.click(
                '//*[@id="root"]/div/div/div[2]/div[3]/div[1]/sf-airdrop-claim/div/dialog/div/ul/li[1]/button',
                delay=1000,
                timeout=10000,
            )

            phantom_page = await self.get_phantom_page()
            await phantom_page.click("[data-testid='primary-button']", delay=1000)

        except Exception as error:
            logger.error(
                f"{self.address} | Error while connecting wallet: {error} | Retrying.."
            )
            await self.page.reload()
            return await self.process_connect_wallet()

    async def submit_transaction(self):
        page = await self.get_phantom_page()
        await self.page.wait_for_timeout(1000)
        await page.click("[data-testid='primary-button']", delay=1000)
        return True

    async def is_eligible(self):
        try:
            amount = await self.page.inner_text(
                '//*[@id="root"]/div/div/div[2]/div[3]/div[1]/sf-airdrop-claim/div/section/div/div[1]/div/span[2]/span[1]',
                timeout=3000,
            )
            logger.info(f"{self.address} | Eligible for {amount} NYAN tokens")
            return True
        except PlaywrightTimeoutError:
            logger.error(f"{self.address} | Wallet not eligible")
            return False

    async def process_claim_transaction(self):
        for _ in range(3):
            try:
                await self.page.wait_for_timeout(2000)
                claim_button = await self.page.wait_for_selector(
                    "text=Claim Now", timeout=10000
                )
                await claim_button.click(delay=1000)

                if not await self.submit_transaction():
                    logger.error(f"{self.address} | Failed to submit transaction")
                    return False

                return True

            except PlaywrightTimeoutError:
                try:
                    claimed = await self.page.wait_for_selector(
                        "text=Airdrop claimed", timeout=1000
                    )
                    if claimed:
                        logger.info(f"{self.address} | Airdrop already claimed")
                        return False

                except PlaywrightTimeoutError:
                    ...

                logger.error(
                    f"{self.address} | Failed to find claim button | Most likely already claimed | Retrying.."
                )
                continue

            except Exception as error:
                logger.error(
                    f"{self.address} | Error while processing transaction: {error} | Retrying.."
                )
                continue

    async def process_claim(self) -> bool:
        await self.page.goto("https://missions.nyanheroes.com/claim")
        await self.process_connect_wallet()
        await self.page.wait_for_timeout(2000)

        if not await self.is_eligible():
            return False

        if not await self.process_claim_transaction():
            return False

        logger.info(
            f"{self.address} | Transaction submitted | Waiting for confirmation"
        )
        return await self.wait_for_tokens()

    async def wait_for_tokens(self):
        try:
            await self.page.wait_for_selector("text=Airdrop claimed", timeout=60000)
            logger.success(f"{self.address} | Airdrop claimed")
            return True

        except PlaywrightTimeoutError:
            logger.error(f"{self.address} | Failed to claim airdrop after 60 seconds")
            return False

    async def close_browser(self):
        if self.browser:
            await self.browser.close()
        if self.playwright:
            await self.playwright.stop()

    async def setup_environment(self):
        logger.info(f"{self.address} | Setting up environment")
        await self.setup_browser()

        self.page = await self.get_phantom_page()
        if not self.page:
            await self.close_browser()
            return await self.setup_environment()

        if not await SetupPhantom(phrase=self.phrase, page=self.page).start():
            await self.close_browser()
            return await self.setup_environment()

    def send_tokens_to_wallet(self):
        for _ in range(3):
            logger.info(f"{self.address} | Sending NYAN tokens to wallet")
            status, trx = send_nyan_tokens(
                private_key=self.private_key, to_address=config["main_wallet_address"]
            )

            if status:
                logger.success(f"{self.address} | Tokens sent to main wallet: {trx}")
                return True
            else:
                logger.error(
                    f"{self.address} | Failed to send tokens to main wallet: {trx} | Retrying.."
                )

        return False

    async def verify_and_send_tokens(self):
        tokens = await self.verify_nyan_tokens()
        if tokens >= 1:
            logger.success(f"{self.address} | NYAN tokens: {tokens}")
            return await self.run_in_executor(self.send_tokens_to_wallet)
        else:
            logger.info(f"{self.address} | No NYAN tokens found in wallet")
            return False

    async def run_in_executor(self, func):
        loop = asyncio.get_running_loop()
        return await loop.run_in_executor(self.executor, func)

    async def start(self):
        try:
            if await self.verify_and_send_tokens():
                await self.close_browser()
                return True

            if not await self.check_sol_balance():
                return False

            await self.setup_environment()
            await self.process_claim()
            await self.close_browser()

            return await self.verify_and_send_tokens()

        except Exception as error:
            logger.error(f"{self.address} | Unexpected error: {error} | Restarting..")
            await self.close_browser()
            return await self.start()
