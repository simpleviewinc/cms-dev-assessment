import React, { Component } from "react";
import "./App.css";
import axios from "axios";

import Header from "./Components/Header/Header";
import SingleListing from "./Components/SingleListing/SingleListing";

class App extends Component {
  constructor() {
    super();
    this.state = {
      listings: [],
      events: [],
      offers: [],
      allItems: [],
      selected: "All"
    };
  }

  componentDidMount() {
    this.getAllFromApi();
  }
  //http request to api and response is stored in state
  getAllFromApi = () => {
    let req = [
      axios.get("https://sv-reqres.now.sh/api/listings"),
      axios.get("https://sv-reqres.now.sh/api/events"),
      axios.get("https://sv-reqres.now.sh/api/offers")
    ];
    Promise.all(req).then(res => {
      console.log(res[2].data.data);

      this.setState({
        listings: res[0].data.data,
        events: res[1].data.data,
        offers: res[2].data.data,
        allItems: res[0].data.data.concat(res[1].data.data, res[2].data.data)
      });
    });
  };

  filterDisplay = value => {
    this.setState({
      selected: value
    });
  };

  render() {
    /* map props to single listing component. includes id so first and last
    listings can change styling on large view*/

    const { allItems, listings, events, offers, selected } = this.state;
    // var items = "All"
    if (selected === "All") {
      var items = allItems;
    } else if (selected == "Listings") {
      var items = listings;
    } else if (selected == "Events") {
      var items = events;
    } else if (selected == "Offers") {
      var items = offers;
    }
    const allListings = items.map((item, i) => {
      console.log(items);

      return (
        <SingleListing
          id={i}
          image={item.mediaurl}
          title={item.title}
          description={item.description}
        />
      );
    });

    return (
      <>
        <Header
          filterEvents={this.filterEvents}
          filterOffers={this.filterOffers}
          filterAll={this.filterAll}
          filterDisplay={this.filterDisplay}
        />
        <div className="app">
          {/* all listings are rendered */}
          <div className="grid-items">{allListings}</div>
        </div>
      </>
    );
  }
}
export default App;
