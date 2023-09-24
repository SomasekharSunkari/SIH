import web3 from 'web3';
// const Web3L = require('web3'); // Import web3.js library
const contractABI = [
    {
      "inputs": [],
      "name": "ipfsCid",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_cid",
          "type": "string"
        }
      ],
      "name": "setIpfsCid",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getIpfsCid",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    }
  ];

const contractAddress = '0xe113F6B2d1eb286DCDBf53B2d0C212Aa76282AB8'; // Replace with the actual contract address
const cidToCheck = 'QmXBAiD4mQy2q7DoCqibk79r6EuQ58WsPT4A5ftrFSGAWG'; // The CID to check

// Initialize web3.js with your Ethereum node's URL
const Web3 = new web3('http://localhost:8545'); // Replace with your Ethereum node URL

// Create a contract instance
const contract = new Web3.eth.Contract(contractABI, contractAddress);

// Call the isCIDValid function to check CID existence
contract.methods.isCIDValid(cidToCheck).call()
  .then((isValid) => {
    if (isValid) {
      console.log('CID is present in the contract.');
    } else {
      console.log('CID is not present in the contract.');
    }
  })
  .catch((error) => {
    console.error('Error checking CID:', error);
  });
