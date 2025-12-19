// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Strings.sol";


contract PortfolioNFT is ERC721URIStorage {
    uint256 public tokenId;
    uint256 public constant MAX_SUPPLY = 100;

    string public baseTokenURI;

    constructor(string memory _baseTokenURI)
        ERC721("Web3 Portfolio NFT", "WPNFT")
    {
        baseTokenURI = _baseTokenURI;
    }

    function mint() external {
        require(tokenId < MAX_SUPPLY, "Max supply reached");

        tokenId++;
        _safeMint(msg.sender, tokenId);

        _setTokenURI(
            tokenId,
            string(
                abi.encodePacked(
                    baseTokenURI,
                    Strings.toString(tokenId),
                    ".json"
                )
            )
        );
    }
}
