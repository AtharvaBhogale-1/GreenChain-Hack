import { useState, useEffect } from 'react';
import abi from "./contractJson/chai.json";
import { ethers } from "ethers";
import Memos from './components/Memos';
import Buy from './components/Buy';
import chai from "./chai.png";
import './App.css';

function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null
  });
  const [account, setAccount] = useState('Buyer Not connected');

  useEffect(() => {
    const template = async () => {
      const contractAddress = "0xa64e3144835aF8781c750ceC432784a68d883266";
      const contractABI = abi.abi;
      
      try {
        const { ethereum } = window;
        const account = await ethereum.request({
          method: "eth_requestAccounts"
        });
        
        window.ethereum.on("accountsChanged", () => {
          window.location.reload();
        });
        
        setAccount(account);
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );
        console.log(contract);
        setState({ provider, signer, contract });
      } catch (error) {
        console.log(error);
      }
    };
    template();
  }, []);

  return (
    <div className="container">
      <div className="header">
        <img src={chai} className="logo" alt="Chai Logo" />
        <p className="account-info">Buyer Account Connected - {account}</p>
      </div>
      <div className="main-content">
        <Buy state={state} />
        <Memos state={state} />
      </div>
    </div>
  );
}

export default App;