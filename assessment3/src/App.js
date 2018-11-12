import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import SortHeader from './SortHeader.js';
import PostsView from './PostsView.js';
import PostItems from './PostItems.js';

class App extends Component {
  //Add state, so we can change things as needed
  constructor(){
    super()
    this.state = {
      filter: 'All'
    }

    this.changeFilterPosts = this.changeFilterPosts.bind(this);
  }

  //create a new call back for when the filter button is pressed
  // this will be passed in to the SortHeader, so it can be called when needed
  changeFilterPosts(filterText){
    this.setState({filter: filterText}); //when state is changed, should re-render postsView as well
  }

  render() {
    return (
      <div className="App">
        <div class="container">
          <SortHeader filter={this.state.filter} onFilterChange={this.changeFilterPosts}/>
          <PostsView filter={this.state.filter}/>
        </div>
      </div>
    );
  }
}

export default App;
