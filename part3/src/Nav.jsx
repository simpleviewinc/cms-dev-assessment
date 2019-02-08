import React, { Component } from 'react'
import './Nav.css'

// each show() will hit API and filter based on
class Nav extends Component {
  showAll() {
    console.log('All')
  }

  showListings() {
    console.log('Listings')
  }

  showEvents() {
    console.log('Events')
  }

  showOffers() {
    console.log('Offers')
  }

  render() {
    return (
      <div className="nav">
        <button type="button" onClick={this.showAll}>
          All
        </button>
        <button type="button" onClick={this.showListings}>
          Listings
        </button>
        <button type="button" onClick={this.showEvents}>
          Events
        </button>
        <button type="button" onClick={this.showOffers}>
          Offers
        </button>
      </div>
    )
  }
}

export default Nav
