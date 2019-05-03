import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import dummyData from '../../dummy-data';
import PostContainer from './PostContainer';

class PostsPage extends React.Component {
    constructor(){
        super();
        this.state = {
          dummyData: [], 
          searchText: ""
        }
      }
    
      componentDidMount(){
        this.setState({ dummyData: dummyData })
      }
    
      searchHandler = (e) => {
        e.preventDefault();
        this.setState({ 
          searchText: e.target.value,
        })
      }      
    
      preventRefresh = (e) => {
        e.preventDefault();
      }

      handleLogOut = e => {
        localStorage.removeItem('username')
        window.location.reload();
      }

      render(){
      return (
        <div className="App">
    
          <SearchBar
          searchHandler={this.searchHandler}
          preventRefresh={this.preventRefresh}
          handleLogOut={this.handleLogOut}
          />
    
         <div className="card-container"> 
          <PostContainer 
          dummyData = {this.state.dummyData.filter(post => post.username.includes(this.state.searchText))} 
          />
         </div>
    
        </div>
      );
     }
    }

    export default PostsPage;