import React, { Component } from 'react';
import Article from '../article';
import PropTypes from 'prop-types';
import accordion from '../../decorators/accordion';

import { connect } from 'react-redux';
import { deleteArticle } from '../../ac';

class ArticleList extends Component {
  static propTypes = {
    articles: PropTypes.array.isRequired,
    // fetchData: PropTypes.func,

    //from accordion decorator
    openItemId: PropTypes.string,
    toggleOpen: PropTypes.func
  };
  // state = {
  //   openArticleId: null
  // }
  render() {
    const { articles } = this.props;
    return articles.map(article => (
      <li key={article.id} className="test--article-list__item">
        <Article
          article={article}
          isOpen={article.id === this.props.openItemId}
          toggleOpen={this.props.toggleOpen(article.id)}
          handleDelete={this.props.deleteArticle.bind(this, article.id)}
          // toggleOpen = {this.toggleOpenArticle.bind(this, article.id)}
        />
      </li>
    ));
  }

  // toggleOpenArticle = article_id => ev => {
  //   this.setState({openArticleId: article_id === this.state.openArticleId ? null : article_id})
  // }

  // toggleOpenArticle(article_id) {
  //   this.setState({openArticleId: article_id})
  // }
}

const ArticleListWithAccordion = accordion(ArticleList);

export default connect(
  ({ articles }) => ({
    articles
  }),
  { deleteArticle }
)(ArticleListWithAccordion);
