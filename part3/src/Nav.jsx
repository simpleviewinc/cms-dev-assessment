import React, { Component } from 'react'
import './Nav.css'

// each show() will hit API and filter based on
class Nav extends Component {
  showAll() {
    alert('All')
  }

  showListings() {
    alert('Listings')
  }

  showEvents() {
    alert('Events')
  }

  showOffers() {
    alert('Offers')
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
