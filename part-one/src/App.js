import React, { Component } from "react";
import ListingCard from "./ListingCard";
import { getListings } from "./api";
import "./App.css";

class App extends Component {
  state = {
    listings: [],
    events: [],
    offers: []
  };

  componentDidMount() {
    getListings().then(({ listings, meta }) => {
      this.setState({ listings });
    });
  }
  render() {
    return (
      <div className="App">
        <div className="card-grid">
          {this.state.listings.map((listing, index) => {
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
        </div>
      </div>
    );
  }
}

export default App;
