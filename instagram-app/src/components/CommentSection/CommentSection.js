import React from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import moment from "moment";
import styled from 'styled-components';

const CommentsSection = styled.section`
    display: flex;
    flex-direction: column;
`;

const TimeStamp = styled.span`
    color: silver;
    font-size: .8rem;
    padding-left: 15px;
`;

const BorderTop = styled.hr`
    color: rgb(199, 198, 198);
    width: 96%;
    margin: 15px auto; 
`;

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
            username: localStorage.getItem('username'), 
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
            <CommentsSection> 
                {this.state.comments.map((eachComment) => {
                return  <Comment
                        eachComment={eachComment}
                        />
                })}
                <TimeStamp>{moment(this.props.timestamp, "MMMM Do YYYY, hh:mm:ss a").fromNow()}</TimeStamp>
                <BorderTop/>
                <CommentInput 
                comment={this.state.comment}
                handleInput={this.handleInput}
                addNewComment={this.addNewComment}
                />
            </CommentsSection> )
 }
}

export default CommentSection;