import React from 'react';
import '../style.css';
import { BsQuestionCircleFill } from "react-icons/bs";

const Table = () => {
    return (
        <div className="table">
            <table>
                <caption>Recent Transaction</caption>
                <thead>
                    <tr>
                    <th scope="col">Transaction Type</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Balance</th>
                    <th scope="col">Date</th>
                    <th scope="col">Time</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">Motor Repair</th>
                        <td>-$300.98</td>
                        <td>-$30,670.02</td>
                        <td>24 Feb, 2020</td>
                        <td>12:00 AM</td>
                    </tr>
                    <tr>
                        <th scope="row">Nepa Subscription</th>
                        <td>-$300.98</td>
                        <td>-$30,670.02</td>
                        <td>24 Feb, 2020</td>
                        <td>12:00 AM</td>
                    </tr>
                    <tr>
                      <th scope="row" colspan="5" >
                         <div className="inquiry">
                             <BsQuestionCircleFill />
                             <a href="#"><p className="inquiry-text">See More</p></a>
                         </div>
                         
                      </th>
                    
                    </tr>

                    
                </tbody>>
                    
            </table>
        </div>

    );
};

export default Table;