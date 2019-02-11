import React, { Component } from 'react';
import './App.css';

import Storyview from './components/Storyview/Storyview';
import StoryItems from './components/StoryItems_500.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="container">
          <div class="sort-header">
            {/* <OutlinedButtons /> */}
          </div>
          <Storyview posts={StoryItems} />

        </div>
      </div>
    );
  }
}

export default App;
 