import React from "react";
import PropTypes from "prop-types";
import "./CommentSection.css"
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import moment from "moment";

class CommentSection extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
            comment: ""
        }
    }

    addNewComment = e => {
        e.preventDefault(); 
        let newComment = { 
            username: "MzAnthropical", 
            text: this.state.comment
        };
        this.setState({
                comments: [...this.state.comments, newComment],
                comment: ""
        })
    };

    handleInput = e => {
        this.setState({ comment: e.target.value }) 
    }


    render() {
        return ( 
            <section className="comment-section"> 
                {this.state.comments.map((eachComment, index) => {
                return  <Comment
                        index={index}
                        eachComment={eachComment}
                        />
                })}
                <span className="timestamp">{moment().startOf('hour').fromNow()}</span>
                <hr/>
                <CommentInput 
                comment={this.state.comment}
                handleInput={this.handleInput}
                addNewComment={this.addNewComment}
                />
            </section> )
}
}

{/* function renderComments(props, index){
    console.log(props)
    return (
        <div key={index*100} className="comment">
            <span className="comment-user-name">{props.username}</span>
            <span className="comment-content">{props.text}</span>
        </div>
    )
} */}

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
    }))
}

export default CommentSection;