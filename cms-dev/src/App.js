import React, { Component } from 'react';
import { fetchListings } from './ApiCalls'
import Listings from './Listings.js'
import './App.css';


export class App extends Component {
  constructor() {
    super()
    this.state = {
      listings: [],
    }
  }

  componentDidMount() {
    this.getListings()
  }

  getListings = async () => {
    await fetchListings()
    .then(listings => this.setState({listings: listings.data}))
    .catch(error => error.message)       
  }

  render () {
    return (
      <div className='App'>
        <Listings listings={this.state.listings} />
      </div>
    )
  }
}

export default App;