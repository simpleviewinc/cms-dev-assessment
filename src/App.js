import React, { Component } from 'react';
import ArticleList from './components/ArticleList';
import './App.css';
import { articles } from './articles.js';

class App extends Component {

  render() {
    return(
      <div className="container my-3">
        <ArticleList articles={articles} />
      </div>
    )
  }
}

export default App;
