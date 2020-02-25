import React, { Component } from 'react';
import ArticleList from './components/ArticleList';
import './App.css';

class App extends Component {

  constructor() {
      super()
      this.state = {
        articles: []
      }
  }

  componentDidMount() {
    fetch('https://sv-reqres.now.sh/api/listings?per_page=20')
      .then(response=> response.json())
      .then(listings => {this.setState({ articles: listings.data})});
  }

  render() {
    const { articles } = this.state;
    return !articles.length ? 
    <h1>Fetching Data</h1> : 
    (
      <div className="container my-3">
        <ArticleList articles={articles} counter={0}/>
      </div>
    )
  }
}

export default App;