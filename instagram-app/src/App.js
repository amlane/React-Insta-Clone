import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';

class App extends React.Component {
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
    this.setState({ searchText: e.target.value })
  }

  render(){
  return (
    <div className="App">

      <SearchBar
      searchHandler={this.searchHandler}
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

export default App;
