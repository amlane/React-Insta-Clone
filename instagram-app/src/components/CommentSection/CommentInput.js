import React from 'react';
import styled from 'styled-components';

const AddNewComment = styled.form`
        display: flex;
`;

const AddCommentSection = styled.input`
        width: 85%;
        height: 50px;
        border: 0px solid;
        padding: 10px 15px;
        font-size: 0.9rem;

        ::placeholder {
            font-family: 'Roboto', sans-serif;
            font-size: 0.9rem;
        }
`;

function CommentInput(props){
    return (
        <AddNewComment 
        className="add-comment-section"
        onSubmit={props.addNewComment}
        >
            <AddCommentSection 
            placeholder="Add a comment..." 
            type="text"
            value={props.comment}
            onChange={props.handleInput}

            />

            <button 
            className="comment-btn"><i className="fas fa-ellipsis-h"></i>
            </button>
        </AddNewComment>
    )
}

export default CommentInput;