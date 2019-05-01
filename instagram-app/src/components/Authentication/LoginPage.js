import React from 'react';
import './LoginPage.css';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }


    handleNewUser = e => {
        const username = this.state.username;
        localStorage.setItem('username', username);
        window.location.reload();
    }


    render(){
    return (
        <div className="login-page">
        <form className="login-card">
            <h2>Instagram</h2>
            <p className="subtitle">Sign up to see the Kardashian's</p>
                <input />
                <input />
                <button>Sign In</button>
        </form>
      </div>
    )
 }
}

export default LoginPage;