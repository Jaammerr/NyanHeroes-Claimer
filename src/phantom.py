import os

from loguru import logger
from undetected_playwright.async_api import Page
from undetected_playwright._impl._errors import TimeoutError as PlaywrightTimeoutError


path_to_extension = os.path.abspath("./Phantom")


class SetupPhantom:
    def __init__(self, phrase: str, page: Page):
        self.phrase = phrase
        self.page = page

    async def input_password(self):
        elements = (
            ("[data-testid='onboarding-form-password-input']", "Wdsfklsdfsdfkl!ds434"),
            (
                "[data-testid='onboarding-form-confirm-password-input']",
                "Wdsfklsdfsdfkl!ds434",
            ),
        )

        for element, value in elements:
            await self.page.wait_for_selector(element)
            await self.page.fill(element, value)

    async def import_wallet(self):
        try:
            field = await self.page.wait_for_selector("[data-testid='import-wallet-button']")
            await field.click(delay=1000)
            await self.page.click(
                "[data-testid='import-seed-phrase-button']", delay=1000, timeout=1000
            )
        except PlaywrightTimeoutError:
            ...

        await self.page.wait_for_selector(
            "[data-testid='secret-recovery-phrase-word-input-0']", timeout=5000
        )
        for index, word in enumerate(self.phrase.split()):
            await self.page.click(
                f"[data-testid='secret-recovery-phrase-word-input-{index}']"
            )
            await self.page.fill(
                f"[data-testid='secret-recovery-phrase-word-input-{index}']", word
            )

        for _ in range(2):
            await self.page.wait_for_timeout(1000)
            await self.page.click(
                "[data-testid='onboarding-form-submit-button']", delay=1000
            )

        await self.input_password()
        await self.page.click(
            "[data-testid='onboarding-form-terms-of-service-checkbox']", delay=1000
        )
        await self.page.click(
            "[data-testid='onboarding-form-submit-button']", delay=1000
        )

    async def start(self) -> bool:
        try:
            await self.import_wallet()
            return True

        except Exception as error:
            logger.error(f"Failed to setup Phantom: {error}")
            return False
