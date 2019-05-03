import React from 'react';
import styled from 'styled-components';
import "./PostContainer.css"

const Likes = styled.p`
    padding-left: 15px;
    font-weight: bold;
    font-size: .9rem;
`;

const ClickMes = styled.i`
    color: gray;
    font-size: 25px;
    padding: 10px;

    :hover {
        cursor: pointer;    
    }
`;


const UserInteraction = props => {
    let updateLikeBtn = props.liked ? " clicked" : "";
    return (
        <>
            <div className="user-interaction">
            
                <ClickMes 
                className={`far fa-heart liked ${updateLikeBtn}`} 
                onClick={props.toggleLikes}>
                </ClickMes>
                
                <ClickMes
                className="far fa-comment">
                </ClickMes>
            </div>
            <Likes>{props.likes} likes</Likes>
        </>
    )
}

export default UserInteraction;