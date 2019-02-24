// I tried building this using react hooks, but I was getting weird erros,
// And I did not want to risk not being able to complete so I swapped back to a standard context

import React, { Component } from "react";
// Importing dependencies axios is used for http request.
import axios from "axios";
// Exporting our context
export const ListingsContext = React.createContext({});

class ListingsProvider extends Component {
  state = {
    listings: [],
    events: [],
    offers: [],
    invailidImg: false,
    overflow: false,
    filter: "all",
    pages: [],
    pageIndex: 0,
    itemCounter: 0,
    randomPages: []
  };

  // set up all of our arrays on the state
  componentDidMount() {
    this.fetchApi();
    this.createPages();
    this.setRandomPages();
  }

  // fetch data from each api end point, set them each on state
  fetchApi = () => {
    let apiArr = ["listings", "events", "offers"];
    apiArr.forEach(apiName => {
      axios
        .get(`https://sv-reqres.now.sh/api/${apiName}/?per_page=20`)
        .then(response => {
          this.setState({ [apiName]: response.data.data });
        });
    });
  };

  // create our pages for component allowing us to dispplay our datat to the user
  createPages = () => {
    // I set up an array of how many items I want per page
    const perPage = [5, 5, 3, 2];
    // empty array of sub arrays, allowing me to push into each one created pages.
    const pages = [[], [], [], []];
    axios
      .get("https://sv-reqres.now.sh/api/listings/?per_page=20")
      .then(response => {
        const listings = response.data.data;
        let inputCounter = 0;
        for (let i = 0; i < perPage.length; i++) {
          let counter = 0;
          while (counter < perPage[i]) {
            let addedItem = listings[inputCounter];
            addedItem.position = inputCounter + 1;
            pages[i].push(addedItem);
            counter++;
            inputCounter++;
          }
        }
        this.setState({ pages });
      });
  };

  // this function allows me to change through the page and set the index on state for our components use
  changePage = move => {
    let pageIndex = this.state.pageIndex;
    if (move === "up") {
      pageIndex + 1 <= this.state.pages.length - 1
        ? (pageIndex += 1)
        : (pageIndex = 0);
    } else {
      pageIndex - 1 >= 0
        ? (pageIndex -= 1)
        : (pageIndex = this.state.pages.length - 1);
    }

    this.setState({ pageIndex });
  };

  // using this the data is filtered out based on the name of the event that triggers it
  setFilter = event => {
    this.setState({ filter: event.target.name });
  };

  // the filterd array is based off of the value of the filter on state, so the above function filters
  // and as the filter chages so will the data this function returns when envoked
  filteredArr = () => {
    switch (this.state.filter) {
      case "all":
        return [
          ...this.state.listings,
          ...this.state.events,
          ...this.state.offers
        ];

      case "listings":
        return this.state.listings;

      case "events":
        return this.state.events;

      case "offers":
        return this.state.offers;

      default:
        break;
    }
  };

  // a lot like when we created pages however this fucntion creates random pages.
  setRandomPages = () => {
    const perPage = [5, 5, 3, 2];
    const randomPages = [[], [], [], []];
    axios
      .get("https://sv-reqres.now.sh/api/listings/?per_page=20")
      .then(response => {
        const listings = response.data.data;
        let inputCounter = 0;

        for (let i = 0; i < perPage.length; i++) {
          let counter = 0;

          while (counter < perPage[i]) {
            let randomItem =
              listings[Math.floor(Math.random() * listings.length - 1) + 1];
            randomItem.position = inputCounter + 1;
            randomPages[i].push(randomItem);
            counter++;
            inputCounter++;
          }
        }
        this.setState({ randomPages });
      });
  };
  render() {
    // setting the state object to a listingsData variables, this will allow me to access it through that name
    const listingsData = this.state;

    return (
      // Setup context provider to pass the data on state. And too pass the methods on class as actions
      <ListingsContext.Provider
        value={{
          listingsData,
          actions: {
            testImage: this.testImage,
            filteredArr: this.filteredArr,
            setFilter: this.setFilter,
            createPages: this.createPages,
            changePage: this.changePage
          }
        }}
      >
        {this.props.children}
      </ListingsContext.Provider>
    );
  }
}

export default ListingsProvider;
