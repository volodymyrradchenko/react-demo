import React, { Component } from "react";
import Article from "./article/Article";
import { articles } from "../fixtures";
import accordion from "../decorators/accordion";

class ArticleList extends Component {
  // state = {
  //   openArticleId: null
  // }
  render() {
    return articles.map(article => (
      <li key={article.id}>
        <Article
          article={article}
          isOpen={article.id === this.props.openItemId}
          toggleOpen={this.props.toggleOpen(article.id)}
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

export default accordion(ArticleList);
