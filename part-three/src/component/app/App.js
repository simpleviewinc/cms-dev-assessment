import React, { Component } from 'react';
import Container from '../container/Container';
import { connect } from 'react-redux';
import { setListings } from '../../action';

export class App extends Component {

  async componentDidMount() {
    await this.listings();
  }

  listings = async () => {
    try {
      const response = await fetch('https://sv-reqres.now.sh/api/listings?per_page=15');
      const listings = await response.json();
      this.setPages(listings.data);
    } catch (error) {
      console.log(error);
    }
  }

  setPages = (listings) => {
    const pages = [];
    const cardsPerPage = [ 5, 5, 3, 2 ];
    const addNumberToCards = listings.map((card, index) => {
      return Object.assign({}, card, { number: index + 1})
    });
    cardsPerPage.forEach(amount => {
      const cards = addNumberToCards.splice(0, amount)
      pages.push(cards)
    });
    this.props.setListings(pages);
  }

  render() {
    return (
      <div className='App'>
        <Container />
      </div>
    );
  }
}

export const mapDispatchToProps = (dispatch) => ({
  setListings: listings => dispatch(setListings(listings))
});


export default connect(null, mapDispatchToProps)(App);
