import os.path
import yaml

from loguru import logger


def get_wallets() -> list[str]:
    wallets_path = os.path.join(os.path.dirname(__file__), "wallets.txt")
    if not os.path.exists(wallets_path):
        logger.error(f"Wallets file not found at {wallets_path}")
        exit(1)

    with open(wallets_path, "r") as file:
        wallets = file.read().splitlines()
        return wallets


def load_config() -> dict:
    settings_path = os.path.join(os.path.dirname(__file__), "settings.yaml")
    if not os.path.exists(settings_path):
        logger.error(f"Settings file not found at {settings_path}")
        exit(1)

    with open(settings_path, "r") as file:
        settings = yaml.safe_load(file)

    REQUIRED_FIELDS = ["main_wallet_address", "threads", "resident_proxy"]
    for field in REQUIRED_FIELDS:
        if field not in settings:
            logger.error(f"Settings file is missing required field: {field}")
            exit(1)

    settings["wallets"] = get_wallets()
    proxy_values = (
        settings["resident_proxy"].replace("http://", "").replace("@", ":").split(":")
    )
    if len(proxy_values) != 4:
        logger.error(f"Invalid proxy format: {settings['resident_proxy']}")
        exit(1)

    settings["proxy"] = {
        "server": f"http://{proxy_values[2]}:{proxy_values[3]}".strip(),
        "username": proxy_values[0].strip(),
        "password": proxy_values[1].strip(),
    }

    return settings
