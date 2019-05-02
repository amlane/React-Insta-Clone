import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import UserInteraction from './UserInteraction';
import PropTypes from "prop-types";

class Post extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            likes: this.props.item.likes,
            liked: false
        }
    }


    toggleLikes = () => {
       if(!this.state.liked){
           this.setState(prevState => ({
               likes: prevState.likes + 1, 
               liked: !prevState.liked
           }))} else if (this.state.liked) {
               this.setState(prevState => ({ 
                   likes: prevState.likes - 1,
                   liked: !prevState.liked
                }))
           }
       }

    render(){
    return (
        <div className="card">
        <div className="post-header">
            <img src={this.props.item.thumbnailUrl} className="thumbnail-img" alt="thumbnail"/>
            <div className="users-name"> {this.props.item.username} </div> 
        </div>
        <img src={this.props.item.imageUrl} className="post-image" alt="post" />   

        <UserInteraction
        toggleLikes={this.toggleLikes}
        likes={this.state.likes}
        liked={this.state.liked}
        />


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