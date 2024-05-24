import os

from loguru import logger
from art import tprint


def export_accounts(accounts: list[tuple[bool, str]]):
    success_accounts_path = os.path.join(os.getcwd(), "config", "success_accounts.txt")
    failed_accounts_path = os.path.join(os.getcwd(), "config", "failed_accounts.txt")

    success_accounts = open(success_accounts_path, "a")
    failed_accounts = open(failed_accounts_path, "a")

    for success, account in accounts:
        if success:
            success_accounts.write(account + "\n")
        else:
            failed_accounts.write(account + "\n")

    logger.debug(
        "Accounts exported to success_accounts.txt and failed_accounts.txt | Folder: config"
    )
    success_accounts.close()
    failed_accounts.close()


def show_dev_info():
    tprint("JamBit")
    print("\033[36m" + "VERSION: " + "\033[34m" + "1.0" + "\033[34m")
    print("\033[36m" + "Channel: " + "\033[34m" + "https://t.me/JamBitPY" + "\033[34m")
    print(
        "\033[36m"
        + "GitHub: "
        + "\033[34m"
        + "https://github.com/Jaammerr"
        + "\033[34m"
    )
    print(
        "\033[36m"
        + "DONATION EVM ADDRESS: "
        + "\033[34m"
        + "0xe23380ae575D990BebB3b81DB2F90Ce7eDbB6dDa"
        + "\033[0m"
    )
    print()
