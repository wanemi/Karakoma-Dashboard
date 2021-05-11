import React from 'react';
import Wallet from './Wallet';
import Services from './Services';
import Table from './Table';

const Expenses = () => {
    return (
        <div>
            <div className="link">
                    <Wallet />
            </div>
            <div className="link">
                   <Services />
           </div>
           <div className="link">
                  <Table />
           </div>
        </div>



    );
};

export default Expenses;