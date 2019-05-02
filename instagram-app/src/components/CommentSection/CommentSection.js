import React from "react";
import "./CommentSection.css"
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import moment from "moment";

class CommentSection extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
            comment: "", 

        }
    }

    addNewComment = e => {
        e.preventDefault(); 
        if(!this.state.comment) return;
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
                {this.state.comments.map((eachComment) => {
                return  <Comment
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

export default CommentSection;