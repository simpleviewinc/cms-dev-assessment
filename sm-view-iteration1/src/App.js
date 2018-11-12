import React, { Component } from 'react';
import './App.css';
import TileContainer from './components/tileContainer';

class App extends Component {
  render() {
    return (
     <div class="app-container">
        <TileContainer></TileContainer>
     </div>
    );
  }
}

export default App;
