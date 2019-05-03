import React from 'react';
import './App.css';
import PostsPage from './components/PostContainer/PostsPage';
import LoginPage from './components/Authentication/LoginPage';
import withAuthenticate from './components/Authentication/withAuthenticate';


class App extends React.Component {
  constructor(){
    super();
    this.state = {}
  }

  render(){
    return (
      <div> 
        <ComponentFromWithAuthenticate />
      </div>
    )
  }
}

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(LoginPage)

export default App;
