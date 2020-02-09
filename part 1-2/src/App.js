import React, { Component } from 'react';
import {fetchListings, fetchEvents, fetchOffers} from './controller/apiController.js';
import Listings from './models/Listings.js';
import Events from './models/Events.js';
import Offers from './models/Offers.js';
// import logo from './logo.svg';
import './App.css';

export class App extends Component {
  constructor(){
    super()
    this.state = {
      listings: [],
      events: [],
      offers: [],
      view: 'All'
    }
  }

  componentDidMount(){
    this.getListings()
    this.getEvents()
    this.getOffers()
  }

  getListings = async() => {
    await fetchListings()
    .then(listings => this.setState({listings: listings.data}))
    .catch(err => err.message)
  }

  getEvents = async() => {
    await fetchEvents()
    .then(events => this.setState({eventss: events.data}))
    .catch(err => err.message)
  }

  getOffers = async() => {
    await fetchOffers()
    .then(offers => this.setState({offers: offers.data}))
    .catch(err => err.message)
  }

  onActive = (a) => {
    this.setState({view: a.target.innerText})
  }

  render(){
    if(this.state.view === 'All'){
      return (
        <div className = 'app'>
          <section className='nav'>
            <button onClick={this.onActive}>All</button>
            <button onClick={this.onActive}>Listings</button>
            <button onClick={this.onActive}>Events</button>
            <button onClick={this.onActive}>Offers</button>
          </section>
          <Listings listings={this.state.listings}/>
          <Events events={this.state.events}/>
          <Offers offers={this.state.offers}/>
        </div>
      )
    } else if(this.state.view === 'Listings'){
      return (
        <div className = 'app'>
          <section className='nav'>
            <button onClick={this.onActive}>All</button>
            <button onClick={this.onActive}>Listings</button>
            <button onClick={this.onActive}>Events</button>
            <button onClick={this.onActive}>Offers</button>
          </section>
          <Listings listings={this.state.listings}/>
        </div>
      )
    } else if(this.state.view === 'Events'){
      return (
        <div className = 'app'>
          <section className='nav'>
            <button onClick={this.onActive}>All</button>
            <button onClick={this.onActive}>Listings</button>
            <button onClick={this.onActive}>Events</button>
            <button onClick={this.onActive}>Offers</button>
          </section>
          <Events events={this.state.events}/>
        </div>
      )
    } else if(this.state.view === 'Offers'){
      return (
        <div className = 'app'>
          <section className='nav'>
            <button onClick={this.onActive}>All</button>
            <button onClick={this.onActive}>Listings</button>
            <button onClick={this.onActive}>Events</button>
            <button onClick={this.onActive}>Offers</button>
          </section>
          <Offers offers={this.state.offers}/>
        </div>
      )
    }
  }

}

export default App;
