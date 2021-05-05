import React from 'react';
import '../style.css';
import { FaHome, FaWallet, FaMoneyBillAlt, FaPowerOff } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { AiOutlineMenu } from "react-icons/ai";
import logo from "../logo.png";


const Menu = () => {
    return (
        <div className="navbar">
            <div>
             <a href="#" className="side-nav__link">
                  <AiOutlineMenu className="icon-style" />
                  <span><img src={logo} /></span>
             </a>
          </div>  

          <ul className="side-nav">
             <li className="side-nav__item side-nav__item--active">
                  <a href="#" className="side-nav__link">
                      <FaHome className="icon-style" />
                      <span>overview</span>
                 </a>
             </li>
             <li className="side-nav__item">
                  <a href="#" className="side-nav__link">
                      <FaWallet className="icon-style" />
                      <span>Wallet</span>
                 </a>
             </li>
             <li className="side-nav__item">
                  <a href="#" className="side-nav__link">
                      <FaMoneyBillAlt className="icon-style" />
                      <span>Pay Bills</span>
                 </a>
             </li>
             <li className="side-nav__item">
                  <a href="#" className="side-nav__link">
                      <FiSettings className="icon-style" />
                      <span>Settings</span>
                 </a>
             </li>        
          </ul>
          <hr />
          <div className="space">
             <a href="#" className="side-nav__link logout">
                  <FaPowerOff className="icon-style" />
                  <span>Logout</span>
             </a>
          </div>       
       </div>
    );
};

export default Menu;