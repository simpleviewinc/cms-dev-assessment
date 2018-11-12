import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import PostsView from './PostsView.js';
import PostItems from './PostItems.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="container">
          <div class="sort-header"></div>
          <PostsView posts={PostItems}/>
        </div>
      </div>
    );
  }
}

export default App;
