import React from 'react';
import '../style.css';
import globe from '../globe.png';
import { FaWallet } from "react-icons/fa";



const Jashboard = () => {
  return (
      <div className="dashboard_container">
            <div className="fund">
                <h1 className="dashboard_header">
                    Send Money to anywhere in the world
                </h1>
                <p className="dashboard_P">
                    Tempor, cras volutpat quam auctor. Faucibus ac consequat risus in egestas nam. Mauris praesent quis vitae cursus pretium sem ac quisque. Aliquam pulvinar amet, nisl, commodo, arcu turpis.
                </p>
                <div className="dashboard_wallet">
                    <button className="btn">
                      <FaWallet className="icon-style" />
                      <span>Fund Your Wallet</span>
                    </button>
                    <p className="balance">

                      view balance

                    </p>
                    
                </div>
            </div>
            <div className="globe">
               <span><img src={globe} /></span>
            </div>
      </div>

    );

};

export default Jashboard;