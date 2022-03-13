// contracts/GameItems.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
// Deployed on Mumbai address: 0x17552d0F85D4C97286C9b3063800e857a2C4D1Fa
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

contract OrigamiNFT is ERC1155 {

    constructor() public ERC1155("https://api.orig.am/item/{id}.json") {
        // enable revenue share and other Marketplace Mint features.
    }
}