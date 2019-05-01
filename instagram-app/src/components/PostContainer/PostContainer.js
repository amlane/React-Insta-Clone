import React from 'react';
import "./PostContainer.css";
import Post from "./Post";


class PostContainer extends React.Component {


    render(){
        console.log(this.props)
    return this.props.dummyData.map( (post, index) => {

        return (
            <Post
            post={post}
            key={index}
            />
        )
    })
  }
}

export default PostContainer;