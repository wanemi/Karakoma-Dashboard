import React from 'react';
import '../style.css';
import Link from './Link';
import { FaHome, FaWallet, FaMoneyBillAlt, FaPowerOff } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { AiOutlineMenu } from "react-icons/ai";
import logo from "../logo.png";


const Menu = () => {
    return (
        <div className="navbar">
            <div>
             <Link href="/" className="side-nav__link">
                  <AiOutlineMenu className="icon-style" />
                  <span><img alt='' src={logo} /></span>
             </Link>
          </div>  

          <ul className="side-nav">
             <li className="side-nav__item">
                  <Link href="/" className="side-nav__link">
                      <FaHome className="icon-style" />
                      <span>overview</span>
                 </Link>
             </li>
             <li className="side-nav__item">
                  <Link href="/expenses" className="side-nav__link">
                       <FaWallet className="icon-style" />
                       <span>Wallet</span>
                    
                      
                 </Link>
             </li>
             <li className="side-nav__item">
                  <Link href="/bag" className="side-nav__link">
                      <FaMoneyBillAlt className="icon-style" />
                      <span>Pay Bills</span>
                 </Link>
             </li>
             <li className="side-nav__item">
                  <Link href="/" className="side-nav__link">
                      <FiSettings className="icon-style" />
                      <span>Settings</span>
                 </Link>
             </li>        
          </ul>
          <hr />
          <div className="space">
             <Link href="/" className="side-nav__link logout">
                  <FaPowerOff className="icon-style" />
                  <span>Logout</span>
             </Link>
          </div>       
       </div>
    );
};

export default Menu;