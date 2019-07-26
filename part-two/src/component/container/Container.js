import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../card/Card';

export class Container extends Component {

  filterArray = () => {
    const { category, listings, offers, events } = this.props;
    let filterArray = [];
    switch(category) {
      case 'listings': 
        return filterArray.concat(listings.data);
      case 'events':
        return filterArray.concat(events.data);
      case 'offers':
        return filterArray.concat(offers.data);
      default:
        return filterArray.concat(listings.data, offers.data, events.data);
    }
  }

  render() {

    const updatedArray = this.filterArray();
    const listingsCard = updatedArray.map(list => {
      return (
        <Card key={list.recid} data={list} />
      );
    })

    return (
      <section className='container'>
        {
          listingsCard
        }
      </section>
    );
  }
}

export const mapStateToProps = (state) => ({
  listings: state.listings,
  offers: state.offers,
  events: state.events,
  category: state.category
});

export default connect(mapStateToProps)(Container);