import React, { Component } from 'react';
// import logo from './logo.svg';
import './style.css';
import PropTypes from 'prop-types';
import CommentList from '../comment-list';
// import toggleOpen from '../../decorators/toggleOpen';

class Article extends Component {
  static propTypes = {
    article: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string
    }).isRequired
  };

  render() {
    const { article, toggleOpen, isOpen, handleDelete } = this.props;

    return (
      <div ref={this.setContainerRef}>
        <h3>{article.title}</h3>
        <button onClick={handleDelete}>Delete</button>
        <button onClick={toggleOpen} className="test--article__btn">
          {isOpen ? 'Close' : 'Open'}
        </button>
        {this.getBody()}
      </div>
    );
  }

  setContainerRef = ref => {
    this.container = ref;
    // console.log('---', ref);
  };

  getBody() {
    const { article, isOpen } = this.props;
    return isOpen ? (
      <section className="test--article__body">
        {article.text}
        <CommentList comments={article.comments} />
      </section>
    ) : null;
  }
}

// export default toggleOpen(Article)
export default Article;
