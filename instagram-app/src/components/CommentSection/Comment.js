import React from 'react';
import PropTypes from "prop-types";

function Comment(props){
    return (
        <div key={props.eachComment.timestamp} className="comment">
            <span className="comment-user-name">{props.eachComment.username}</span>
            <span className="comment-content">{props.eachComment.text}</span>
        </div>
    )
}

Comment.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
    }))
}

export default Comment;