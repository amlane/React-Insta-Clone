import React from 'react';
import PropTypes from "prop-types";
import styled from 'styled-components';

const CommentPost = styled.section`
    padding: 8px 15px;
`;

const CommentUserName = styled.span`
    font-weight: bold;
    padding-right: 10px;

    :hover {
        cursor: pointer;
    }
`;

const CommentText = styled.span`
    font-size: .9rem;
`;


function Comment(props){
    return (
        <CommentPost>
            <CommentUserName>{props.eachComment.username}</CommentUserName>
            <CommentText>{props.eachComment.text}</CommentText>
        </CommentPost>
    )
}

Comment.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
    }))
}

export default Comment;