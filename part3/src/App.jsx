import React, { Component } from 'react'
import './App.css'
import Grid from './Grid'
import Nav from './Nav'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Grid />
      </div>
    )
  }
}

export default App
