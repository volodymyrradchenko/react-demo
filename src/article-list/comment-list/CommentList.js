import React, { Component } from "react";
import Comment from "./comment/Comment";
import toggleOpen from "../../decorators/toggleOpen";

class CommentList extends Component {
  static defaultProps = {
    comments: []
  };

  render() {
    return (
      <div>
        <button onClick={this.props.toggleOpen}>
          {this.props.isOpen ? "Hide comments" : "Show comments"}
        </button>
        <ul>{this.getComments()}</ul>
      </div>
    );
  }

  getComments() {
    const { comments, isOpen } = this.props;
    if (isOpen && !comments.length) return <p>No comments yet!</p>;
    return isOpen
      ? comments.map(comment => (
          <li key={comment.id}>
            <Comment comment={comment} />
          </li>
        ))
      : null;
  }
}

export default toggleOpen(CommentList);
