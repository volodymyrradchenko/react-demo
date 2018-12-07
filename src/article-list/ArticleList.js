import React from 'react';
import Article from './article/Article';
import { articles } from '../fixtures';

export default function ArticleList() {
  return articles.map(article => <li key = {article.id}><Article article = {article} /></li>)
}
