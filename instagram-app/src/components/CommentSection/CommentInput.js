import React from 'react';

function CommentInput(props){
    return (

        <form className="add-comment-section">
            <input 
            className="add-comment" 
            placeholder="Add a comment..." 
            type="text"
            value={props.comment}
            />
            <button className="comment-btn"><i className="fas fa-ellipsis-h"></i></button>
        </form>
    )
}

export default CommentInput;