import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setArticles } from './actions';
import { loadData } from './api/api';

import ArticleList from './components/ArticleList';
import ButtonList from './components/ButtonList';

import './App.css';

// parameter state comes from index.js provider store state(rootReducers)
const mapStateToProps = (state) => {
  return {
    articles: state.requestData.articles,
    filter: state.setToggle.filter
  }
}

// dispatch the DOM changes to call an action. mapStateToProps returns object, mapDispatchToProps returns function
// the function returns an object then uses connect to change the data from reducers.
const mapDispatchToProps = (dispatch) => {
    return {
        setArticles: (articles, category) => dispatch(setArticles(articles, category))
    }
}

class App extends Component {

  setData = (category) => {
            return (data) => {
                this.props
                    .setArticles(data.data, category);
            }
        };

  loadData = (category) => {
            loadData(category).then(this.setData(category));
        }

  componentDidMount() {
        this.loadData('listings');
        this.loadData('events');
        this.loadData('offers');
  }

  render() {
    let filteredArticles = this.props.articles.filter(article => {
            if (this.props.filter === "all") {
                return true;
            } else {
                return article.category === this.props.filter;
            }
        });
    return !filteredArticles.length ? 
    <h1>Fetching Data</h1> : 
    (
      <div className="container my-3">
        <ButtonList/>
        <ArticleList articles={filteredArticles} counter={0}/>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
