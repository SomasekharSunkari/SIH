 import Web3 from 'web3';


const web3 = new Web3('http://127.0.0.1:7545'); // Replace with your Ganache URL
// const contract1 = require("C:\Users\sunkari somasekhar\Desktop\SIH_Frontend\client\src\contracts\IPFSStorage.json")
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


const contractAddress = '0x958F0ADc224FeAa251Bd29D54B8798cE8F950C90'; // Replace with your contract's address

const contract = new web3.eth.Contract(contractABI, contractAddress);

// Check if the contract.methods object contains the expected method names
console.log('Contract Methods:', contract.methods);

// Replace 'generatedCID' with an actual CID
// Replace 'generatedCID' with an actual CID
const generatedCID = 'QmXBAiD4mQy2q7DoCqibk79r6EuQ58WsPT4A5ftrFSGAWG';

// Define custom gas options
const gasLimit = 400000; // Adjust the gas limit as needed
const gasPrice = '2000000000'; // Adjust the gas price (in wei) as needed

// Call the contract's function to set the IPFS CID with custom gas options
contract.methods
  .setIpfsCid(generatedCID)
  .send({ from: '0xb10c3780F5C209D489cB3C61b34FfD5B978fD588', gas: gasLimit, gasPrice: gasPrice })
  .on('receipt', (receipt) => {
    console.log('Transaction receipt:', receipt);
  })
  .on('error', (error) => {
    console.error('Transaction error:', error);
  });
