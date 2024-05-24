
# NyanHeroes Claimer


## 🔗 Links

🔔 CHANNEL: https://t.me/JamBitPY

💬 CHAT: https://t.me/JamBitChat

💰 DONATION EVM ADDRESS: 0xe23380ae575D990BebB3b81DB2F90Ce7eDbB6dDa


## 🤖 | Features:
- **Auto Claim**
- **Auto send NYAN to main wallet**


## 📝 | Description:
**In order for NYAN tokens to be sent to the main wallet, it must be activated. Before you start, send at least 0.001 NIAN to your main wallet.**

Token claiming works through the browser.

Therefore, it is not recommended to run more than 3-5 threads unless you have a powerful system.

When script transferring tokens to your main wallet, 20% is automatically sent to me (commission)

rust_spl_sender.exe (src > sender) - This is a sender that is written in Rust because it is almost impossible to work with Solana through Python

## 🚀 Installation
`` Required python >= 3.10 and Rust (cargo)``

``1. Close the repo and open CMD (console) inside it``

``2. Install requirements: pip install -r requirements.txt``

``3. Setup playwright: playwright install``

``3. Build sender - run: cd ./src/sender and than: cargo build``

``4. Setup configuration and accounts in the config folder``

``4. return to the root folder and run: python run.py``



## ⚙️ Config (config > settings.yaml)

**Residential proxy is required to avoid phantom and solana rate limits** (The proxy must be dynamic: each request = new IP)

| Name    | Description                                              |
|---------|----------------------------------------------------------|
| main_wallet_address | Address of the main wallet where tokens will be sent     |
| resident_proxy | residential proxy in the format http://user:pass@ip:port |
| threads | Number of browsers that will work simultaneously                        |



## ⚙️ Accounts format (config > wallets.txt)

- mnemonic


## 📄 Results
```After the script is finished, the results will be saved in the config folder in files success_accounts.txt/failed_accounts.txt```


