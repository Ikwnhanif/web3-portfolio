"use client";

import {
  useAccount,
  useWriteContract,
  useWaitForTransactionReceipt,
} from "wagmi";
import { PORTFOLIO_NFT_ABI, PORTFOLIO_NFT_ADDRESS } from "@/lib/contract";

export default function MintNFT() {
  const { address } = useAccount();

  const { writeContract, data: hash, isPending } = useWriteContract();

  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({
    hash,
  });

  const mintNFT = () => {
    writeContract({
      address: PORTFOLIO_NFT_ADDRESS as `0x${string}`,
      abi: PORTFOLIO_NFT_ABI,
      functionName: "mint",
    });
  };

  return (
    <div className="flex flex-col items-center gap-4 mt-6">
      <button
        onClick={mintNFT}
        disabled={!address || isPending}
        className="px-6 py-3 bg-indigo-600 text-white rounded-lg disabled:opacity-50"
      >
        {isPending ? "Minting..." : "Mint NFT"}
      </button>

      {hash && (
        <a
          href={`https://sepolia.etherscan.io/tx/${hash}`}
          target="_blank"
          className="text-sm text-blue-500 underline"
        >
          View Transaction
        </a>
      )}

      {isConfirming && <p>Waiting for confirmation...</p>}
      {isSuccess && (
        <p className="text-green-600">🎉 NFT Minted Successfully!</p>
      )}
    </div>
  );
}
