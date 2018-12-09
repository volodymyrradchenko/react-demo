import { ARTICLE_DELETE } from '../constants';

export function deleteArticle(id) {
  return {
    type: ARTICLE_DELETE,
    payload: { id }
  };
}
