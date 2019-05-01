import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from "prop-types";

class Post extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            likes: this.props.item.likes
        }
    }


    incrementLike = () => {
       this.setState(prevState => ({ likes: prevState.likes + 1 }))
    }

    render(){
    return (
        <div className="card">
        <div className="post-header">
            <img src={this.props.item.thumbnailUrl} className="thumbnail-img" alt="thumbnail"/>
            <div className="users-name"> {this.props.item.username} </div> 
        </div>
        <img src={this.props.item.imageUrl} className="post-image" alt="post" />   

        <div className="user-interaction">
           
            <i className="far fa-heart" onClick={this.incrementLike}></i>
            
            <i className="far fa-comment"></i>
        </div>
        <p className="likes">{this.state.likes} likes</p>


        <CommentSection
        comments={this.props.item.comments}
        />

    </div>
    )
    }
}

Post.propTypes = {
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    timestamp: PropTypes.string
}

export default Post;