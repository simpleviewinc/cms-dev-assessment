import React, { Component } from 'react';
import { fetchListings, fetchEvents, fetchOffers } from './ApiCalls';
import Listings from './Listings.js';
import Events from './Events.js';
import Offers from './Offers.js';
import './App.css';


export class App extends Component {
  constructor() {
    super()
    this.state = {
      listings: [],
      events: [],
      offers: [],
      view: 'All'
    }
  }

  componentDidMount() {
    this.getListings()
    this.getEvents()
    this.getOffers()
  }

  getListings = async () => {
    await fetchListings()
    .then(listings => this.setState({listings: listings.data}))
    .catch(error => error.message)      
  }

  getEvents = async () => {
    await fetchEvents()
    .then(events => this.setState({events: events.data}))
    .catch(error => error.message)
  }

  getOffers = async () => {
    await fetchOffers()
    .then(offers => this.setState({offers: offers.data}))
    .catch(error => error.message)
  }

  changeView = (e) => {
    this.setState({view: e.target.innerText})
  }


  render () {
    if (this.state.view === 'All') {
      return (
        <div className='App'>
          <section className='nav'>
              <button onClick={this.changeView}>All</button>
              <button onClick={this.changeView}>Listings</button>
              <button onClick={this.changeView}>Events</button>
              <button onClick={this.changeView}>Offers</button>
          </section>
          <Listings listings={this.state.listings} />
          <Events events={this.state.events} />
          <Offers offers={this.state.offers} />
        </div>
      )
    } else if (this.state.view === 'Listings') {
      return (
        <div className='App'>
          <section className='nav'>
            <button onClick={this.changeView}>All</button>
            <button onClick={this.changeView}>Listings</button>
            <button onClick={this.changeView}>Events</button>
            <button onClick={this.changeView}>Offers</button>
          </section>
          <Listings listings={this.state.listings} />
        </div>
      )
    } else if (this.state.view === 'Events') {
      return (
        <div className='App'>
          <section className='nav'>
            <button onClick={this.changeView}>All</button>
            <button onClick={this.changeView}>Listings</button>
            <button onClick={this.changeView}>Events</button>
            <button onClick={this.changeView}>Offers</button>
          </section>
          <Events events={this.state.events} />
        </div>
      )      
    } else {
      return (
        <div className='App'>
          <section className='nav'>
            <button onClick={this.changeView}>All</button>
            <button onClick={this.changeView}>Listings</button>
            <button onClick={this.changeView}>Events</button>
            <button onClick={this.changeView}>Offers</button>
          </section>
          <Offers offers={this.state.offers} />
        </div>
      )           
    }
  }
}

export default App;