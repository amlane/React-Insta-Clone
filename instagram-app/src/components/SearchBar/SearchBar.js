import React from 'react';
import './SearchBar.css'

const SearchBar = props => {
    return (
        <header className="header-container">
            <div className="logo-title">
                <i className="fab fa-instagram "></i>
                <h1>Instagram</h1>
            </div>
            <form>
            <input 
            className="input" 
            placeholder="🔍 Search" 
            type="text"
            onChange={props.searchHandler}
            />
            </form>
            <div className="header-icons">
                <i className="far fa-compass"></i>
                <i className="far fa-heart"></i>
                <i className="far fa-user"></i>
            </div>
        </header>
    )
}

export default SearchBar;