import React, { Component } from "react";
import ListingCard from "./ListingCard";
import OffersCard from "./OffersCard";
import { getListings, getEvents, getOffers } from "./api";
import EventsCard from "./EventsCard";
import "./Grid.css";

class Grid extends Component {
  state = {
    listings: [],
    events: [],
    offers: []
  };

  componentDidMount() {
    getListings().then(({ listings, meta }) => {
      this.setState({ listings });
    });
    getEvents().then(({ events, meta }) => {
      this.setState({ events });
    });
    getOffers().then(({ offers, meta }) => {
      this.setState({ offers });
    });
  }
  render() {
    return (
      <div className="App">
        <div className="card-grid">
          {(this.props.filter === "all" || this.props.filter === "listings") &&
            this.state.listings.map((listing, index) => {
              let positionClassName = "card";
              if (index % 5 === 0) {
                positionClassName = "verticalCard";
              }
              if (index === 0 || index % 6 === 0) {
                positionClassName = "largeCard";
              }
              return (
                <ListingCard
                  className={positionClassName}
                  listing={listing}
                  key={listing.recid}
                />
              );
            })}
          {(this.props.filter === "all" || this.props.filter === "events") &&
            this.state.events.map((listing, index) => {
              let positionClassName = "card";
              if (index % 5 === 0) {
                positionClassName = "verticalCard";
              }
              if (index === 0 || index % 6 === 0) {
                positionClassName = "largeCard";
              }
              return (
                <EventsCard
                  className={positionClassName}
                  listing={listing}
                  key={listing.recid}
                />
              );
            })}
          {(this.props.filter === "all" || this.props.filter === "offers") &&
            this.state.offers.map((listing, index) => {
              let positionClassName = "card";
              if (index % 5 === 0) {
                positionClassName = "verticalCard";
              }
              if (index === 0 || index % 6 === 0) {
                positionClassName = "largeCard";
              }
              return (
                <OffersCard
                  className={positionClassName}
                  listing={listing}
                  key={listing.recid}
                />
              );
            })}
        </div>
      </div>
    );
  }
}

export default Grid;
