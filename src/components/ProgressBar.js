import React from 'react';
import '../style.css';

const ProgressBar = () => {
    return (
        <div className="level">
           <div className="steps">
             <p className="profile">Complete Your Profile</p>
             <p className="complete">3/4 steps completed</p>
           </div>
           <div className="meter"></div>
        </div>

    );
};

export default ProgressBar;