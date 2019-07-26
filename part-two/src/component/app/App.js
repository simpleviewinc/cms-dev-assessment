import React, { Component } from 'react';
import Container from '../container/Container';
import Header from '../header/Header';
import { connect } from 'react-redux';
import { setListings, setEvents, setOffers } from '../../action';


export class App extends Component {

  async componentDidMount() {
    await this.listings();
    await this.events();
    await this.offers();
  }

  listings = async () => {
    try {
      const response = await fetch('https://sv-reqres.now.sh/api/listings?per_page=6');
      const listings = await response.json();
      this.props.setListings(listings);
    } catch (error) {
      console.log(error)
    }
  }

  events = async () => {
    try {
      const response = await fetch('https://sv-reqres.now.sh/api/events?per_page=6');
      const events = await response.json();
      this.props.setEvents(events);
    } catch (error) {
      console.log(error)
    }
  }

  offers = async () => {
    try {
      const response = await fetch('https://sv-reqres.now.sh/api/offers?per_page=6');
      const offers = await response.json();
      this.props.setOffers(offers);
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <div className='App'>
        <Header />
        <Container />
      </div>
    );
  }
}

export const mapDispatchToProps = (dispatch) => ({
  setListings: listings => dispatch(setListings(listings)),
  setEvents: events => dispatch(setEvents(events)),
  setOffers: offers => dispatch(setOffers(offers))
});

export default connect(null, mapDispatchToProps)(App);

