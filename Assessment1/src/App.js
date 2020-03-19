import React, { Component } from "react";
import "./App.css";
import axios from "axios";

import SingleListing from "./Components/SingleListing";

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

  getlistings = () => {
    axios.get(`https://sv-reqres.now.sh/api/listings`).then(res => {
      console.log(res);
      this.setState({
        listings: res.data.data
      });
    });
  };

  render() {
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
    return <div className="app">
      <div className="grid-items">
      {allListings}
      </div>
      </div>;
  }
}
export default App;
