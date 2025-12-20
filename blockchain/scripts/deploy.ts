import { ethers } from "hardhat";

async function main() {
  const baseURI =
    "ipfs://bafybeielxh7cc5j7aoczogt2wmshqasnrzsft34ipb37fqd3tqhmaefdhu/";

  const NFT = await ethers.getContractFactory("PortfolioNFT");

  // @ts-ignore — ethers v6 + hardhat typing bug
  const nft = await NFT.deploy(baseURI);

  await nft.waitForDeployment();

  console.log("NFT deployed to:", await nft.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
