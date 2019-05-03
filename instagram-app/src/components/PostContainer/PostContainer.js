import React from 'react';
import "./PostContainer.css";
import Post from "./Post";


class PostContainer extends React.Component {


    render(){
        console.log(this.props)
    return this.props.dummyData.map( item => {

        return (
            <Post
            item={item}
            key={item.timestamp}
            />
        )
    })
  }
}

export default PostContainer;