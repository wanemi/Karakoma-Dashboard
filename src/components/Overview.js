import React from 'react';
import '../style.css';
import Jashboard from './Jashboard';
import ProgressBar from './ProgressBar';
import Services from './Services';
import Table from './Table';

const Overview = () => {
    return (
        <div className="overview">
          <div className="link">
             <Jashboard />
          </div>
          <div className="link">
             
             <ProgressBar />
             
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

export default Overview;