import Web3 from 'web3';
const web3 = new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/' + process.env.REACT_APP_INFURA_ID);
export default web3;

