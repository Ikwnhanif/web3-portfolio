# 🌐 Web3 Portfolio – NFT Minting Demo

Live demo:  
👉 https://web3-portfolio-6sat.vercel.app/

---

## 📌 About This Project

This is a **Web3 portfolio project** that demonstrates a complete NFT workflow:

- Wallet connection (MetaMask)
- Smart contract interaction
- NFT minting on Ethereum **Sepolia testnet**
- Dynamic NFT metadata stored on **IPFS**

The project is built as a **real, working Web3 application**, not just a static landing page.

---

## 🚀 Live Features

- 🔗 Connect wallet using MetaMask
- 🪙 Mint ERC-721 NFT on Sepolia
- 📦 NFT metadata served from IPFS
- 🔍 View transactions on Etherscan
- 🧩 Clean and simple Web3 UI

---

## 🧱 Tech Stack

### Frontend
- **Next.js (App Router)**
- **TypeScript**
- **wagmi**
- **RainbowKit**
- **Tailwind CSS**

### Blockchain
- **Solidity (ERC-721)**
- **Hardhat**
- **ethers.js**
- **OpenZeppelin**

### Infrastructure
- **Ethereum Sepolia Testnet**
- **IPFS (Pinata)**
- **Vercel (Deployment)**

## 🖼 NFT Architecture (NFT Mint)
- **Smart Contract (ERC-721)**
- **tokenURI (dynamic)**
- **IPFS Metadata (JSON)**
- **IPFS Image**


Each minted NFT:
- Has a unique `tokenId`
- Uses dynamic `tokenURI`
- Points to metadata hosted on IPFS
- Displays correctly in wallets like MetaMask

---

## 📄 Smart Contract

- Network: **Ethereum Sepolia**
- Standard: **ERC-721**
- Max Supply: **Limited**
- Metadata: **IPFS-based**
- Mint: Public (demo purpose)

> This contract is deployed and actively used by the frontend demo.

---

## 🧪 How to Use (Demo)

1. Open the live site  
   👉 https://web3-portfolio-6sat.vercel.app/
2. Switch MetaMask network to **Sepolia**
3. Connect your wallet
4. Click **Mint NFT**
5. Confirm transaction
6. View NFT in MetaMask or Etherscan

---

## 🛠 Local Development

```bash
git clone https://github.com/ikwnhanif/web3-portfolio.git
cd web3-portfolio
npm install
npm run dev

---

## 🖼 NFT Architecture

