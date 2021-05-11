import React from 'react';
import Jashboard from './Jashboard';
import ProgressBar from './ProgressBar';
import Services from './Services';
import Table from './Table';

const Home = () => {
    return (
        <div>

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

export default Home;