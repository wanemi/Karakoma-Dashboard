import React from 'react';
import '../style.css';
import { BsSearch } from "react-icons/bs";

const Search = () => {
    return (
        <div className="search-bar">
           <h1 className="search-text">Pay Bills</h1>
           <form action="#" className="search">
                <input type="text" className="search-input" placeholder="Search" />
                <button className="icon-button">
                    <BsSearch className="search-icon" />
                </button>
           </form>
        </div>

    );
};

export default Search;