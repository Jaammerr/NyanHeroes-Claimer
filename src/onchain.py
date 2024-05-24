import asyncio
import base58
import httpx

from loguru import logger
from solders.keypair import Keypair
from mnemonic import Mnemonic
from loader import config

mnemo = Mnemonic("english")


class OnChain:
    def __init__(self, phrase: str):
        super().__init__()

        self.seed = mnemo.to_seed(phrase)
        self.keypair = Keypair.from_seed_and_derivation_path(
            self.seed, dpath="m/44'/501'/0'/0'"
        )
        self.client = httpx.AsyncClient(
            proxies={
                "http://": config["resident_proxy"],
                "https://": config["resident_proxy"],
            }
        )

    @property
    def private_key(self) -> str:
        private_key_bytes = self.keypair.secret()
        public_key_bytes = bytes(self.keypair.pubkey())
        encoded_keypair = private_key_bytes + public_key_bytes
        private_key = base58.b58encode(encoded_keypair).decode()
        return private_key

    @property
    def address(self) -> str:
        return str(self.keypair.pubkey())

    async def check_sol_balance(self, required_balance: float = 0.005):
        tokens = await self.get_tokens()
        for token, balance in tokens:
            if token == "SOL" and balance >= required_balance:
                return True

        logger.error(
            f"{self.address} | Insufficient SOL balance to claim | Required min {required_balance} SOL"
        )
        return False

    async def verify_nyan_tokens(self) -> float:
        for _ in range(3):
            tokens = await self.get_tokens()

            for token, balance in tokens:
                if token == "NYAN":
                    return balance

            else:
                await asyncio.sleep(5)

        # logger.error(f"{self.address} | Failed to verify NYAN tokens")
        return 0

    async def get_tokens(self):
        try:
            params = {
                "enableToken2022": "true",
                "isPartialResponseEnabled": "true",
            }

            json_data = {
                "addresses": [
                    {
                        "chainId": "solana:101",
                        "address": self.address,
                    }
                ],
            }

            response = await self.client.post(
                "https://api.phantom.app/tokens/v1", params=params, json=json_data
            )
            response.raise_for_status()

            data = response.json()
            tokens = []

            for token in data["tokens"]:
                token_data = token["data"]
                name = token_data["symbol"]
                balance = float(
                    int(token_data["amount"]) / 10 ** token_data["decimals"]
                )
                tokens.append((name, balance))

            return tokens

        except Exception as error:
            logger.error(
                f"{self.address} | Failed to get tokens: {error} | Retrying in 5 seconds"
            )
            return await self.get_tokens()

    # async def is_wallet_eligible(self):
    #     try:
    #         headers = {
    #             'accept': '*/*',
    #             'accept-language': 'en-US,en;q=0.9,ru;q=0.8',
    #             'origin': 'https://missions.nyanheroes.com',
    #             'priority': 'u=1, i',
    #             'sec-ch-ua': '"Chromium";v="124", "Google Chrome";v="124", "Not-A.Brand";v="99"',
    #             'sec-ch-ua-mobile': '?0',
    #             'sec-ch-ua-platform': '"Windows"',
    #             'sec-fetch-dest': 'empty',
    #             'sec-fetch-mode': 'cors',
    #             'sec-fetch-site': 'cross-site',
    #             'user-agent': pyuseragents.random(),
    #         }
    #
    #         response = await self.get(
    #             f'https://api-public.streamflow.finance/v2/api/airdrops/2xN4MsmwKZUCbxLmVUHftbNwmMjts323Jg9XXf8imb4R/claimants/{self.address}',
    #             headers=headers,
    #         )
    #
    #         if response.status_code == 404:
    #             logger.info(f"{self.address} | Wallet is not eligible or already claimed")
    #             return False
    #
    #         response.raise_for_status()
    #         data = response.json()
    #
    #         if int(data.get("amountUnlocked", 0)) > 0:
    #             logger.info(f"{self.address} | Wallet is eligible")
    #             return True
    #
    #         else:
    #             logger.info(f"{self.address} | Wallet is not eligible")
    #             return False
    #
    #
    #     except Exception as error:
    #         logger.error(f"{self.address} | Failed to check wallet eligibility: {error}")
    #         return False
