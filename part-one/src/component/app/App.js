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
      const response = await fetch('https://sv-reqres.now.sh/api/listings');
      const listings = await response.json();
      this.props.setListings(listings);
    } catch (error) {
      console.log(error);
    }
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

