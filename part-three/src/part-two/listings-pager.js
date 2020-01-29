import React, { Component } from "react";
import { getListings } from "../api";
import PhotoGrid from "./photo-grid";
import "./listings-pager.css";

export default class ListingsPager extends Component {
  state = {
    listings: [],
    currentPage: 0,
    numPages: 4,
    gridClassName: "five-column-left",
    pagedListings: []
  };

  componentDidMount() {
    getListings(15).then(({ listings, meta }) => {
      this.setState(
        {
          listings
        },
        () => {
          this.setState({
            pagedListings: this.getPagedListings(this.state.currentPage)
          });
        }
      );
    });
  }

  getPagedListings(currentPage) {
    if (currentPage === 0) {
      return this.state.listings.slice(0, 5);
    }
    if (currentPage === 1) {
      return this.state.listings.slice(5, 10);
    }
    if (currentPage === 2) {
      return this.state.listings.slice(10, 13);
    }
    if (currentPage === 3) {
      return this.state.listings.slice(13, 15);
    }
  }
  pageToGridClassName(pageNumber) {
    if (pageNumber === 0) {
      return "five-column-left";
    }
    if (pageNumber === 1) {
      return "five-column-right";
    }
    if (pageNumber === 2) {
      return "three-column";
    }
    if (pageNumber === 3) {
      return "two-column";
    }
  }
  onNextClick = e => {
    e.preventDefault();
    this.setState(prevState => {
      let newValue = (prevState.currentPage + 1) % prevState.numPages;
      return {
        currentPage: newValue,
        gridClassName: this.pageToGridClassName(newValue),
        pagedListings: this.getPagedListings(newValue)
      };
    });
  };
  onPrevClick = e => {
    e.preventDefault();

    this.setState(prevState => {
      let newValue;
      if (prevState.currentPage - 1 === -1) {
        newValue = prevState.numPages - 1;
      } else {
        newValue = prevState.currentPage - 1;
      }

      return {
        currentPage: newValue,
        gridClassName: this.pageToGridClassName(newValue),
        pagedListings: this.getPagedListings(newValue)
      };
    });
  };

  render() {
    return (
      <div className="listings-pager">
        <PhotoGrid
          className={this.state.gridClassName}
          listings={this.state.pagedListings}
        />
        <div className="button-container">
          <button onClick={this.onPrevClick}>prev</button>
          <button onClick={this.onNextClick}>next</button>
        </div>
      </div>
    );
  }
}
