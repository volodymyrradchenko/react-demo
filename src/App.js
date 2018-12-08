import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Filters from './components/filters';

import ArticleList from './components/article-list';

class App extends Component {
  render() {
    return (
      <div>
        <Filters articles={[]} />
        <ArticleList />
      </div>
    );
  }
}

export default App;
