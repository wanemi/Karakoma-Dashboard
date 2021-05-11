import React from 'react';
import Search from './Search';
import Bills from './Bills';

const Bag = () => {
    return (
        <div>
            <div className="link">
                    <Search />
            </div>
            <div className="link">
                    <Bills />
            </div>
            
        </div>

    );
};

export default Bag;