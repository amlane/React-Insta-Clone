import React from "react";
import PropTypes from "prop-types";
import "./CommentSection.css"
import CommentInput from "./CommentInput";

class CommentSection extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
            comment: ""
        }
    }


    render() {
    return ( 
            <section className="comment-section"> 
                {this.props.comments.map(renderComments)} 
                <span className="timestamp">{this.props.timestamp}</span>
                <hr/>
               

                <CommentInput 
                comment={this.state.comment}
                />
            </section> )
}
}

function renderComments(props, index){
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