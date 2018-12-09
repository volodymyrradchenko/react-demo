import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Filters from './components/filters';
// import articles from './fixtures';
import store from './store';
import { Provider } from 'react-redux';

import ArticleList from './components/article-list';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Filters />
        <ArticleList />
      </Provider>
    );
  }
}

export default App;
