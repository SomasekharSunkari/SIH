import Web3 from "web3";

const Web3 = require('web3');
const web3 = new Web3('http://localhost:8545'); // Replace with your Ganache URL

const contractABI = [
[
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
      "type": "function"
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
      "type": "function"
    }
  ]
]; // Replace with your contract's ABI
const contractAddress = '0xYourContractAddress'; // Replace with your contract's address

const contract = new web3.eth.Contract(contractABI, contractAddress);

const generatedCID = 'YourGeneratedCID'; // Replace with the CID generated in step 2

// Call the contract's function to set the IPFS CID
contract.methods.setIpfsCid(generatedCID).send({ from: '0xYourSenderAddress' })
  .on('receipt', (receipt) => {
    console.log('Transaction receipt:', receipt);
  })
  .on('error', (error) => {
    console.error('Transaction error:', error);
  });
