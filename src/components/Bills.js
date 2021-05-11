import React from 'react';
import '../style.css';
import { BsArrowUpRight, BsArrowDownLeft } from "react-icons/bs";
import { FaMoneyBillAlt } from "react-icons/fa";
import { ImQrcode } from "react-icons/im";

const Bills = () => {
    return (
        <div>

                <div className="bills-container">
                    <div className="bills-box">
                        <div className="bills-icon-1">
                            <BsArrowUpRight className="bills-svg" />
                        </div>
                        <h3 className="bills-text">Nepa Bills</h3>
                    </div>
                
                    <div className="bills-box">
                            <div className="bills-icon-2">
                                <BsArrowDownLeft className="bills-svg"/>
                            </div>
                            <h3 className="bills-text">Buy Airtime</h3>
                    </div>
                
                    <div className="bills-box">
                            <div className="bills-icon-3">
                                <FaMoneyBillAlt  className="bills-svg"/>
                            </div>
                            <h3 className="bills-text">Bills</h3>
                    </div>
                    <div className="bills-box">
                            <div className="bills-icon-4">
                                <ImQrcode className="bills-svg"/>
                            </div>
                            <h3 className="bills-text">Bills</h3>
                    </div>
                </div>

                <div className="bills-container">
                    <div className="bills-box">
                            <div className="bills-icon-1">
                                <BsArrowUpRight className="bills-svg" />
                            </div>
                            <h3 className="bills-text">Nepa Bill</h3>
                    </div>
                
                    <div className="bills-box">
                            <div className="bills-icon-2">
                                <BsArrowDownLeft className="bills-svg"/>
                            </div>
                            <h3 className="bills-text">Buy Airtime</h3>
                    </div>
                
                    <div className="bills-box">
                            <div className="bills-icon-3">
                                <FaMoneyBillAlt  className="bills-svg"/>
                            </div>
                            <h3 className="bills-text">Bills</h3>
                    </div>
                    <div className="bills-box">
                        <div className="bills-icon-4">
                            <ImQrcode className="bills-svg"/>
                        </div>
                        <h3 className="bills-text">Bills</h3>
                    </div>
                </div>

                <div className="bills-container">
                    <div className="bills-box">
                        <div className="bills-icon-1">
                            <BsArrowUpRight className="bills-svg" />
                        </div>
                        <h3 className="bills-text">Nepa Bill</h3>
                    </div>
                
                    <div className="bills-box">
                            <div className="bills-icon-2">
                                <BsArrowDownLeft className="bills-svg"/>
                            </div>
                            <h3 className="bills-text">Buy Airtime</h3>
                    </div>
                
                    <div className="bills-box">
                        <div className="bills-icon-3">
                            <FaMoneyBillAlt  className="bills-svg"/>
                        </div>
                        <h3 className="bills-text">Bills</h3>
                        </div>
                    <div className="bills-box">
                        <div className="bills-icon-4">
                            <ImQrcode className="bills-svg"/>
                        </div>
                        <h3 className="bills-text">Bills</h3>
                    </div>
                </div>
        </div>

    );
};

export default Bills;