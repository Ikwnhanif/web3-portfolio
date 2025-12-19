"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import MintNFT from "@/components/MintNFT";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-16 gap-16">
      {/* HERO SECTION */}
      <section className="text-center max-w-2xl">
        <h1 className="text-4xl font-bold mb-4">Web3 Developer Portfolio</h1>
        <p className="text-gray-500 text-lg">
          I build Web3 applications with wallet integration and smart contracts.
        </p>
      </section>

      {/* WHAT I BUILD */}
      <section className="text-center max-w-xl">
        <h2 className="text-2xl font-semibold mb-4">What I Build</h2>
        <ul className="text-gray-600 space-y-2">
          <li>• Web3 frontend with wallet connection</li>
          <li>• Smart contracts using Solidity (ERC-721)</li>
          <li>• On-chain interaction (minting & transactions)</li>
        </ul>
      </section>

      {/* LIVE WEB3 DEMO */}
      <section className="text-center max-w-xl">
        <h2 className="text-2xl font-semibold mb-2">Live Web3 Demo</h2>
        <p className="text-gray-500 mb-6">
          Connect your wallet and mint an NFT on Sepolia testnet.
        </p>

        <div className="flex flex-col items-center gap-6">
          <ConnectButton />
          <MintNFT />
        </div>
      </section>

      {/* TECH STACK */}
      <section className="text-center max-w-xl">
        <h2 className="text-2xl font-semibold mb-2">Tech Stack</h2>
        <p className="text-gray-600">
          Next.js • TypeScript • wagmi • RainbowKit • Solidity • Hardhat •
          Ethereum
        </p>
      </section>

      {/* CONTACT */}
      <section className="text-center max-w-xl">
        <h2 className="text-2xl font-semibold mb-2">Contact</h2>
        <p className="text-gray-600 mb-2">
          Available for freelance Web3 projects.
        </p>
        <p className="font-medium">📧 hikwan7@gmail.com</p>
      </section>
    </main>
  );
}
