import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import UserInteraction from './UserInteraction';

import styled from 'styled-components';
import PropTypes from "prop-types";

const UserCard = styled.section`
        display: flex;
        flex-direction: column;
        font-family: 'Roboto', sans-serif;
        border: 1px solid silver;
        box-shadow: 0 0 8px silver;
        margin: 20px;
        width: 300px;
        height: auto;
        background: white;
`;

const CardHeader = styled.header`
        display: flex;
        width: 85%;
`;

const ThumbnailProfilePic = styled.img`
        width: 65px;
        height: 65px;
        border-radius: 50%;
        padding: 15px;
`;

const UsersName = styled.div`
        align-self: center;
        font-weight: bold;
        letter-spacing: .5px;

        :hover{
            cursor: pointer;
        }
`;

const PostImage = styled.img`
        width: 98%;
        margin: 0 auto;
`;



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
        <UserCard>
        <CardHeader>
            <ThumbnailProfilePic src={this.props.item.thumbnailUrl} className="thumbnail-img" alt="thumbnail"/>
            <UsersName> {this.props.item.username} </UsersName> 
        </CardHeader>

        <PostImage src={this.props.item.imageUrl} className="post-image" alt="post" />   

        <UserInteraction
        toggleLikes={this.toggleLikes}
        likes={this.state.likes}
        liked={this.state.liked}
        />


        <CommentSection
        comments={this.props.item.comments}
        />

    </UserCard>
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