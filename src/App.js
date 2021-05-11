import React from 'react';
import Menu from './components/Menu';
import Overview from './components/Overview';
import './style.css';

export default () => {
    return (
        
           <div className="content">
               <Menu />
               <Overview /> 
           </div>

    );
};