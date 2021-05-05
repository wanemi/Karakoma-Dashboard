import React from 'react';
import '../style.css';
import { BsArrowUpRight, BsArrowDownLeft } from "react-icons/bs";
import { FaMoneyBillAlt } from "react-icons/fa";
import { ImQrcode } from "react-icons/im";




const Services = () => {
    return (
        <div className="service-container">
            <div className="service-box-1">
              <div className="service-icon">
                <BsArrowUpRight className="service-svg" />
              </div>
              <h3 className="service-text">Send Money</h3>
            </div>
          
            <div className="service-box-2">
                    <div className="service-icon">
                        <BsArrowDownLeft className="service-svg"/>
                    </div>
                    <h3 className="service-text">Receive Money</h3>
            </div>
          
            <div className="service-box-3">
              <div className="service-icon">
                 <FaMoneyBillAlt  className="service-svg"/>
              </div>
              <h3 className="service-text">Pay Bill</h3>
            </div>
            <div className="service-box-4">
              <div className="service-icon">
                 <ImQrcode className="service-svg"/>
              </div>
              <h3 className="service-text">Create Barcode</h3>
            </div>
        </div>

    );

};

export default Services;