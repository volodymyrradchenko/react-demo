import React, { Component } from 'react';
// import logo from './logo.svg';
import './Article.css';
import PropTypes from 'prop-types';
import CommentList from '../comment-list/CommentList';
import toggleOpen from '../../decorators/toggleOpen';



class Article extends Component {
  static propTypes = {
    article: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string
    }).isRequired
  }

  render() {
    const { article, toggleOpen, isOpen } = this.props;

    return (
      <div>
        <h3>{article.title}</h3>
        <button onClick = {toggleOpen}>
          {isOpen ? 'Close' : 'Open'}
        </button>
        {this.getBody()}
      </div>
    );
  }

  getBody() {
    const { article, isOpen } = this.props;
    return (isOpen) ? (
      <div>
        <section>{article.text}</section>
        <CommentList comments = {article.comments} />
      </div>
    ) : null
  }

}

export default toggleOpen(Article)
