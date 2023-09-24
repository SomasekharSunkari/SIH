// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract IPFSStorage {
    string public ipfsCid;

    function setIpfsCid(string memory _cid) public {
        ipfsCid = _cid;
    }

    function getIpfsCid() public view returns (string memory) {
        return ipfsCid;
    }
}
