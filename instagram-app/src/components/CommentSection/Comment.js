import React from 'react';

function Comment(props){
    return (
        <div key={props.index*100} className="comment">
        <span className="comment-user-name">{props.eachComment.username}</span>
        <span className="comment-content">{props.eachComment.text}</span>
        </div>
    )
}

export default Comment;