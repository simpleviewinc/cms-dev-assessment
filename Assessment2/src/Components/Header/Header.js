import React, { Component } from 'react';
import './Header.css'

class Header extends Component {
    constructor(){
        super()
        this.state=({
            selected: "All"
        })
    }



    render(){
        return(
            <div className="header-container">
            <div className="header">
                <button onClick={this.props.filterAll}>All</button>
                <button onClick={this.props.filterListings}>Listings</button>
                <button onClick={this.props.filterEvents}>Events</button>
                <button onClick={this.props.filterOffers}>Offers</button>
            </div>
            </div>
        )
    }
}

export default Header