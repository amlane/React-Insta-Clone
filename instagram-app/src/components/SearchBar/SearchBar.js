import React from 'react';

import styled from 'styled-components';
import './SearchBar.css';

const Header = styled.header`
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 85px;
        width: 1000px;
        position: fixed;
        background: #fafafa;
`;

const SearchBar = props => {
    return (
        <Header>
            <div className="logo-title">
                <i className="fab fa-instagram "></i>
                <h1>Instagram</h1>
            </div>
            <form className="search-container">

            <button 
            className="search-btn" 
            onClick={props.preventRefresh}>
            <i className="fas fa-search"></i>
            </button>

            <input 
            className="input" 
            placeholder="search users" 
            type="search"
            onChange={props.searchHandler}
            />
            
            </form>
            <div className="header-icons">
                <i className="far fa-compass"></i>
                <i className="far fa-heart"></i>
                <i className="far fa-user"></i>
            </div>
        </Header>
    )
}

export default SearchBar;