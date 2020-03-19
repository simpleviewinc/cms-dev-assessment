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
      selected: "All",
      windowWidth: ""
    };
  }

  componentDidMount() {
    this.getAllFromApi();
    window.addEventListener("resize", this.updateWindowDimensions.bind(this));
  }
  //http request to api and response is stored in state

  updateWindowDimensions = () => {
    this.setState({ windowWidth: window.innerWidth });
  };

  getAllFromApi = () => {
    //Promises are stored in array so Promise.all can run them at the same time
    /* api calls effect performance so its best to get all of the data at once
    then process and organize as needed */
    let req = [
      axios.get("https://sv-reqres.now.sh/api/listings"),
      axios.get("https://sv-reqres.now.sh/api/events"),
      axios.get("https://sv-reqres.now.sh/api/offers")
    ];
    /*All responses are organized in state from single response using
    Promise.all. */
    Promise.all(req).then(res => {
      this.setState({
        //retrieves data from nested objects
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
    //destructuring state
    const {
      allItems,
      listings,
      events,
      offers,
      selected,
      windowWidth
    } = this.state;

    //checks state to see what filter is active
    //items refers to which array in stat will be mapped over
    if (selected === "All") {
      var items = allItems;
    } else if (selected === "Listings") {
      items = listings;
    } else if (selected === "Events") {
      items = events;
    } else if (selected === "Offers") {
      items = offers;
    }
    const allListings = items.map((item, i) => {
      return (
        /* Window width and id are passed to determine grid 
        size for 1025 (large) view */
        <SingleListing
          windowWidth={this.state.windowWidth}
          id={i}
          image={item.mediaurl}
          title={item.title}
          description={item.description}
        />
      );
    });

    return (
      <>
      {/* Header is passed filter method as prop to Selected state
      which defaults to "All" */}
        <Header filterDisplay={this.filterDisplay} />
        <div className="app">
          {/* Selected listings are rendered */}
          <div
            className={
              selected === "All" && windowWidth > 1024
                ? "extended-grid"
                : "grid-items"
            }
          >
            {allListings}
          </div>
        </div>
      </>
    );
  }
}
export default App;
