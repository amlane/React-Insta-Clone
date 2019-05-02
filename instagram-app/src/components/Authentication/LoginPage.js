import React from 'react';
import styled from 'styled-components';

const LoginPageContainer = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 100vw;
        background-image: linear-gradient(to right, #FF0099, #5c3a4f);
`;

const LoginCard = styled.form`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: 1px solid silver;
        box-shadow: 0 0 10px silver;
        padding: 15px;
        height: 500px;
        width: 300px;
        background: #fafafa;
        opacity: 0.7;
`;

const StyledH2 = styled.h2`
        font-family: 'billabongregular';
        font-size: 5rem;
        padding-bottom: 25px;
`;

const Subtitle = styled.p`
        font-family: 'Roboto', sans-serif;
        color: gray;
        padding-bottom: 70px;
        font-size: 1.1rem;
`;

const LoginInputs = styled.input`
        margin: 10px;
        height: 35px;
        border-top-right-radius: 8px;
        border-top-left-radius: 8px;
        border-bottom-right-radius: 8px;
        border: 1px solid silver;
        box-shadow: 0 0 8px silver;
        text-align: center;
        font-size: 1rem;

        :focus {
            outline: none;
        }
`;

const LoginButton = styled.button`
        border-top-right-radius: 8px;
        border-top-left-radius: 8px;
        border-bottom-right-radius: 8px;
        background: rgba(95, 21, 138, 0.938);
        border: 0px solid transparent;
        height: 35px;
        width: 67%;
        margin: 0 auto;
        color: white;
        font-size: 1rem;
        transition: .2s linear;

        :hover {
            cursor: pointer;
        }
`;



class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    handleLoginInput = e => {
        this.setState({ 
            [e.target.name]: e.target.value
         })
    }


    handleNewUser = e => {
        e.preventDefault();
        const username = this.state.username;
        localStorage.setItem('username', username);
        window.location.reload();
    }


    render(){
    return (
        <LoginPageContainer>
        <LoginCard>
            <StyledH2>Instagram</StyledH2>
            <Subtitle>Sign up to see the Kardashian's</Subtitle>
            <LoginButton onClick={this.handleNewUser}>Log In with Facebook</LoginButton>
            <LoginInputs 
            placeholder="Username..."
            type="text"
            value={this.state.username}
            name="username"
            onChange={this.handleLoginInput}
            />
            <LoginInputs 
            type="password" 
            placeholder="Password..." 
            value={this.state.password}
            name="password"
            onChange={this.handleLoginInput}
            />
            <LoginButton onClick={this.handleNewUser}>Sign In</LoginButton>
           </LoginCard>
      </LoginPageContainer>
    )
 }
}

export default LoginPage;