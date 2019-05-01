import React from 'react';
import "./PostContainer.css"

const UserInteraction = props => {
    let updateLikeBtn = props.liked ? " clicked" : "";
    return (
        <>
        <div className="user-interaction">
           
            <i 
            className={`far fa-heart liked ${updateLikeBtn}`} 
            onClick={props.toggleLikes}>
            </i>
            
            <i className="far fa-comment"></i>
        </div>
        <p className="likes">{props.likes} likes</p>
        </>
    )
}

export default UserInteraction;