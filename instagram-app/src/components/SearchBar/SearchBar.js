import React from 'react';
import styled from 'styled-components';

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

const LogoImage = styled.i`
        font-size: 45px;
        padding: 10px;
        margin-left: 10px;
        margin-top: 7px;
`;

const StyledH1 = styled.h1`
        align-self: center;
        font-family: 'billabongregular';
        font-size: 3rem;
        padding: 15px;

        ::before {
            content: "";
            height: 40px;
            width: 1px;
            border-left: 1px solid silver;
            padding-right: 15px;
`;

const SearchContainer = styled.form`
        border: 1px solid silver;
        border-radius: 3px;
        padding-bottom: 3px;
        background: white;
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

        :focus {
           outline: none;
        }
`;

const HeaderIcons = styled.div`
        color: gray;
        display: flex;
        justify-content: space-around;
        width: 200px;
        height: auto;
`;

const ClickMes = styled.i`
        font-size: 25px;

        :hover {
                cursor: pointer;    
        }
`;


const SearchBar = props => {
    return (
        <Header>
            <LogoHeader>
                <LogoImage className="fab fa-instagram"></LogoImage>
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
                <ClickMes className="far fa-compass"></ClickMes>
                <ClickMes className="far fa-heart"></ClickMes>
                <ClickMes onClick={props.handleLogOut} className="far fa-user"></ClickMes>
            </HeaderIcons>


        </Header>
    )
}

export default SearchBar;