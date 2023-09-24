pragma solidity ^0.8.0;

contract CIDVerifier {
    address public owner;

    // Mapping to store CIDs and their existence status
    mapping(string => bool) public cids;

    constructor() {
        owner = msg.sender;
    }

    // Function to add a CID to the contract
    function addCID(string memory cid) public {
        require(msg.sender == owner, "Only the owner can add CIDs");
        cids[cid] = true;
    }

    // Function to check if a CID exists in the contract
    function isCIDValid(string memory cid) public view returns (bool) {
        return cids[cid];
    }
}
