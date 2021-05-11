import React from 'react';
import '../style.css';
import Home from './Home';
import Expenses from './Expenses';
import Bag from './Bag';
import Route from './Route';


const Overview = () => {
    return (
        <div className="overview">
            <Route path="/">
                <Home />
            </Route>
            <Route path="/expenses">
                <Expenses />
            </Route>
            <Route path="/bag">
                <Bag />
            </Route>
        </div>

    );
};

export default Overview;