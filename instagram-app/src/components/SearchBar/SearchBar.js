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

const LogoHeader = styled.div`
        display: flex;
`;

const LogoImage = styled.img`
        height: 60px;
        padding-top: 3px;
`;

const StyledH1 = styled.h1`
        align-self: center;
        font-family: 'billabongregular';
        font-size: 3rem;
        padding-top: 7px;

        ::before {
            content: "";
            height: 40px;
            width: 1px;
            border-left: 1px solid silver;
            padding-right: 15px;
`;

const logo = `
        ../../instagram-logo.png
`;

const SearchBar = props => {
    return (
        <Header>
            <LogoHeader>
                <LogoImage src={logo} alt="logo" />
                <StyledH1>Instagram</StyledH1>
            </LogoHeader>
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