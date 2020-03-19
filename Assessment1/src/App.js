import React, { Component } from "react";
import "./App.css";
import axios from "axios";

import SingleListing from "./Components/SingleListing/SingleListing";

class App extends Component {
  constructor() {
    super();
    this.state = {
      listings: []
    };
  }

  componentDidMount() {
    this.getlistings();
  }
  //http request to api and response is stored in state
  getlistings = () => {
    axios.get(`https://sv-reqres.now.sh/api/listings`).then(res => {
      console.log(res);
      this.setState({
        listings: res.data.data
      });
    });
  };

  render() {
    /* map props to single listing component. includes id so first and last
    listings can change styling on large view*/
    const { listings } = this.state;
    const allListings = listings.map((lItem, i) => {
      console.log(lItem.mediaurl);

      return (
        <SingleListing
          id={i}
          image={lItem.mediaurl}
          title={lItem.title}
          description={lItem.description}
        />
      );
    });
    return (
      <div className="app">
        {/* all listings are rendered */}
        <div className="grid-items">{allListings}</div>
      </div>
    );
  }
}
export default App;
