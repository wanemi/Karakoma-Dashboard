import React from 'react';
import '../style.css';
import { BsArrowUpRight } from "react-icons/bs";

const Wallet = () => {
    return (
        <div className="wallet-container">
           <div className="text-container">
             <h1 className="wallet-text">Wallet</h1>
             <p className="wallet-p">Take a peak at Your Karakoma Finances</p>
           </div>
           <div className="wallet-balance">
               <div className="wallet-balance-1">
                  <div className="wallet-balance-view">
                     <h2>Wallet Balance: </h2>
                     <div>
                            <BsArrowUpRight className="balance-icon" />
                     </div>
                  </div>
                  <h1 className="wallet-fund">$30,789.09</h1>
               </div>
               <div className="wallet-balance-2">
                   <div className="wallet-account-details">
                        <h2 className="wallet-detail">Virtual Account Number</h2>
                        <h1 className="wallet-bank">Wema Bank</h1>
                        <h2 className="wallet-account-number">12345678901</h2>
                   </div>
                   <div className="wallet-copy">
                      <button className="wallet-btn">
                        <span>Copy</span>
                      </button>
                   </div>
               </div>
           </div>
        </div>


    );
};

export default Wallet;