import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../card/Card';

export class Container extends Component {
  
  render() {
    const listingsCard = this.props.listings.data.map(list => {
      return (
        <Card key={ list.recid } data={ list }/>
      )
    });
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
  listings: state.listings
});

export default connect(mapStateToProps)(Container);