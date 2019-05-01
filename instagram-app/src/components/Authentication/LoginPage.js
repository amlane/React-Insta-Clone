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
        <div className="login-page">
        <form className="login-card">
            <h2>Instagram</h2>
            <p className="subtitle">Sign up to see the Kardashian's</p>
            <input 
            placeholder="Username..."
            type="text"
            value={this.state.username}
            name="username"
            onChange={this.handleLoginInput}
            />
            <input 
            type="password" 
            placeholder="Password..." 
            value={this.state.password}
            name="password"
            onChange={this.handleLoginInput}
            />
            <button onClick={this.handleNewUser}>Sign In</button>
           </form>
      </div>
    )
 }
}

export default LoginPage;