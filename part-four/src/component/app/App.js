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
      let listingsData = listings.data;
      this.setPages(listingsData);
    } catch (error) {
      console.log(error);
    }
  }

  setPages = (listings) => {
    const pages = [];
    const cardsPerPage = this.randomizePageLayout();
    const randomlist = this.randomizeList(listings);
    const addNumberToCards = randomlist.map((card, index) => {
      return Object.assign({}, card, { number: index + 1});
    });
    const addGridLayout = this.assignGridLayout(addNumberToCards, cardsPerPage);
    cardsPerPage.forEach(amount => {
      const cards = addGridLayout.splice(0, amount.amount);
      pages.push(cards);
    });
    this.props.setListings(pages);
  }

  randomizeList = (listings) => {
    for (let i = listings.length - 1; i > 0; i--) {
      const r = Math.floor(Math.random() * (i + 1));
      [listings[i], listings[r]] = [listings[r], listings[i]]
    };
    return listings;
  }

  randomizePageLayout = () => {
    const cardsPerPage = [ {amount: 5, gridlayout: 0}, {amount: 5, gridlayout: 1}, {amount: 3, gridlayout: 2}, {amount: 2, gridlayout: 3}];
    for (let i = cardsPerPage.length - 1; i > 0; i--) {
      const r = Math.floor(Math.random() * (i + 1));
      [cardsPerPage[i], cardsPerPage[r]] = [cardsPerPage[r], cardsPerPage[i]]
    };
    return cardsPerPage;
  }

  assignGridLayout  = (lists, layouts) => {
    let indexPlacement = 0;
    return layouts.reduce((acc, layout) => {
      for(var i = 0; i < layout.amount; i++ ) {
        acc.push(Object.assign( {}, lists[indexPlacement], layout))
        indexPlacement++
      }
      return acc;
    }, []);
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
