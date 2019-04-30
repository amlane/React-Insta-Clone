import React from "react";
import PropTypes from "prop-types";
import "./CommentSection.css"

function CommentSection(props){
    return ( 
            <section className="comment-section"> 
                {props.comments.map(renderComment)} 
                <span className="timestamp">{props.timestamp}</span>
                <hr/>
                <form className="add-comment-section">
                    <input className="add-comment" placeholder="Add a comment..." />
                    <button className="comment-btn"><i className="fas fa-ellipsis-h"></i></button>
                </form>
            </section> )
}

function renderComment(props, index){
    console.log(props)
    return (
        <div key={index*100} className="comment">
            <span className="comment-user-name">{props.username}</span>
            <span className="comment-content">{props.text}</span>
        </div>
    )
}

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
    }))
}

export default CommentSection;