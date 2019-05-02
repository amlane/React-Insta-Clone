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

const SearchContainer = styled.form`
        border: 1px solid silver;
        border-radius: 3px;
`;

const SearchButton = styled.button`
        border: 0px solid transparent;
        background: white;
        height: 25px;
        border-top-left-radius: 3px;
        padding: 5px;

        :hover {
            cursor: pointer;
        }

        :focus {
        outline: none;
        }
`;

const SearchInput = styled.input`
        height: 25px;
        border: 0px solid silver;
        border-left: 0px solid transparent;
        text-align: center;
        font-family: 'Roboto', sans-serif;
`;

const HeaderIcons = styled.div`
        color: gray;
        font-size: 25px;
        display: flex;
        justify-content: space-around;
        width: 200px;
        height: auto;

        :hover {
            cursor: pointer;
        }
`;

const SearchBar = props => {
    return (
        <Header>
            <LogoHeader>
                <LogoImage src={logo} alt="logo" />
                <StyledH1>Instagram</StyledH1>
            </LogoHeader>

            <SearchContainer>

            <SearchButton 
            onClick={props.preventRefresh}>
            <i className="fas fa-search"></i>
            </SearchButton>

            <SearchInput 
            placeholder="search users" 
            type="search"
            onChange={props.searchHandler}
            />
            
            </SearchContainer>

            <HeaderIcons>
                <i className="far fa-compass"></i>
                <i className="far fa-heart"></i>
                <i className="far fa-user"></i>
            </HeaderIcons>


        </Header>
    )
}

export default SearchBar;