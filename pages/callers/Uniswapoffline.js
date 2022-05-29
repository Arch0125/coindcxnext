import Home from '..';
import Web3 from 'web3';
const ethers = require('ethers');
const fetch = require('node-fetch');
import jsonInterface  from './jsonInterface.json'


async function Unioff() {

  let web3 = new Web3;
  // defining the wallet private key
  let privatekey = 'CE75F1A875F2DB7FB064F5DBD302B0C77FFEAA18CC4C314167A5111A04F79AFA';
  let wallet = new ethers.Wallet(privatekey);

  // print the wallet address

  console.log('Using wallet address ' + wallet.address);

  // let transaction = {
  //   to: '0xa238b6008Bc2FBd9E386A5d4784511980cE504Cd',
  //   value: ethers.utils.parseEther('1'),
  //   gasLimit: '21000',
  //   maxPriorityFeePerGas: ethers.utils.parseUnits('5', 'gwei'),
  //   maxFeePerGas: ethers.utils.parseUnits('20', 'gwei'),
  //   nonce: 1,
  //   type: 2,
  //   chainId: 3
  // };

  var myContract = new web3.eth.Contract(jsonInterface,'0x68b3465833fb72a70ecdf485e0e4c7bd8665fc45')

  const tx = {
    nonce: 1,
    gasPrice: '25000',
    gasLimit: '25000',
    to: '0x68b3465833fb72a70ecdf485e0e4c7bd8665fc45',
    value: 1000000000000,
    data: contractData,
    chainId:3,
  };

  var contractData = await myContract.methods.swapExactTokensForTokens('100000',10000,['0xc778417E063141139Fce010982780140Aa0cD5Ab','0xaD6D458402F60fD3Bd25163575031ACDce07538D'],'0xd4ab9d0cf7242b7e14df24b1b0f6c10ecc05ff72').encodeABI();
  //var contractData1 = await tx.methods.swapTokensForExactETH('100000',['0xc778417E063141139Fce010982780140Aa0cD5Ab','0xaD6D458402F60fD3Bd25163575031ACDce07538D'],'0xd4ab9d0cf7242b7e14df24b1b0f6c10ecc05ff72',	1685315649).encodeABI();
  // sign and serialize the transaction 
  // let rawTransaction = await wallet.signTransaction(transaction).then(ethers.utils.serializeTransaction(transaction));

  // print the raw transaction hash
  console.log('Raw txhash string ' + contractData);
  return contractData;

//   // pass the raw transaction hash to the "eth_sendRawTransaction" endpoint
//   let gethProxy = await fetch(`https://api-ropsten.etherscan.io/api?module=proxy&action=eth_sendRawTransaction&hex=${rawTransaction}&apikey=YourApiKeyToken`);
//   let response = await gethProxy.json();

//   // print the API response  
//   console.log(response);

}
export default Unioff