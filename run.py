import asyncio

from loguru import logger

from src.bot import NyanBot
from src.util import export_accounts, show_dev_info
from loader import config, semaphore


async def run_safe(wallet: str) -> tuple[bool, str]:
    async with semaphore:
        bot = NyanBot(wallet)
        status = await bot.start()
        logger.info(f"{bot.address} | Actions with account finished")
        return status, bot.phrase


async def run():
    show_dev_info()
    logger.info(
        f"\n\nNyan Bot started | Loaded {len(config['wallets'])} wallets | Threads: {config['threads']}\n\n"
    )

    tasks = [asyncio.create_task(run_safe(wallet)) for wallet in config["wallets"]]

    accounts = await asyncio.gather(*tasks)
    export_accounts(accounts)


if __name__ == "__main__":
    asyncio.run(run())
