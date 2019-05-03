import React from 'react';
import styled from 'styled-components';

const AddNewComment = styled.form`
        display: flex;
        margin-bottom: 15px;
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

        :focus {
            outline: none;
        }
`;

const AddCommentButton = styled.button`
    background: white;
    border: 1px solid white;

    :focus {
        outline: none;
    }
`;

const DotDotDot = styled.i`
font-size: 2rem;

:hover {
    cursor: pointer;
}
`;

function CommentInput(props){
    return (
        <AddNewComment 
        onSubmit={props.addNewComment}
        >
            <AddCommentSection 
            placeholder="Add a comment..." 
            type="text"
            value={props.comment}
            onChange={props.handleInput}

            />

            <AddCommentButton>
                <DotDotDot className="fas fa-ellipsis-h"></DotDotDot>
            </AddCommentButton>
        </AddNewComment>
    )
}

export default CommentInput;