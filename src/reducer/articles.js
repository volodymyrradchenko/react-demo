import { ARTICLE_DELETE } from '../constants';
import defaultArticles from '../fixtures';

export default (articles = defaultArticles, action) => {
  const { type, payload } = action;
  switch (type) {
    case ARTICLE_DELETE:
      return articles.filter(article => article.id !== payload.id);
    default:
      return articles;
  }
};
