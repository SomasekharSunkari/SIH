// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract IPFSHashStorage {
    mapping(address => string) public ipfsHashes;

    event HashStored(address indexed user, string ipfsHash);

    function storeHash(string memory _ipfsHash) public {
        ipfsHashes[msg.sender] = _ipfsHash;
        emit HashStored(msg.sender, _ipfsHash);
    }

    function getHash(address _user) public view returns (string memory) {
        return ipfsHashes[_user];
    }
}
