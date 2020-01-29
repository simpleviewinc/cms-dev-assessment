import React, { Component } from "react";
import { getListings } from "../api";
import PhotoGrid from "./photo-grid";
import "./listings-pager.css";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

export default class ListingsPager extends Component {
  state = {
    listings: [],
    currentPage: 0,
    numPages: 4,
    gridClassName: "five-column-left"
  };

  fetchListings(page, pageSize) {
    getListings(page, pageSize).then(({ listings, meta }) => {
      this.setState({
        listings
      });
    });
  }

  componentDidMount() {
    const pageData = this.getPagedListings(this.state.currentPage);
    this.fetchListings(pageData.page, pageData.pageSize);
  }

  getPagedListings(currentPage) {
    let availablePages;
    let totalListingsCount = 20;
    let perPage;

    if (currentPage === 0 || currentPage === 1) {
      perPage = 5;
      availablePages = totalListingsCount / 5; // total listing count
    }
    if (currentPage === 2) {
      perPage = 3;
      availablePages = Math.ceil(totalListingsCount / 3);
    }
    if (currentPage === 3) {
      perPage = 2;
      availablePages = totalListingsCount / 2;
    }

    const randomPageNumber = getRandomInt(1, availablePages + 1);
    return { page: randomPageNumber, pageSize: perPage };
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
    this.setState(
      prevState => {
        let newValue = (prevState.currentPage + 1) % prevState.numPages;
        return {
          currentPage: newValue,
          gridClassName: this.pageToGridClassName(newValue)
        };
      },
      () => {
        const pageData = this.getPagedListings(this.state.currentPage);
        this.fetchListings(pageData.page, pageData.pageSize);
      }
    );
  };
  onPrevClick = e => {
    e.preventDefault();

    this.setState(
      prevState => {
        let newValue;
        if (prevState.currentPage - 1 === -1) {
          newValue = prevState.numPages - 1;
        } else {
          newValue = prevState.currentPage - 1;
        }

        return {
          currentPage: newValue,
          gridClassName: this.pageToGridClassName(newValue)
        };
      },
      () => {
        const pageData = this.getPagedListings(this.state.currentPage);
        this.fetchListings(pageData.page, pageData.pageSize);
      }
    );
  };

  render() {
    return (
      <div className="listings-pager">
        <PhotoGrid
          className={this.state.gridClassName}
          listings={this.state.listings}
        />
        <div className="button-container">
          <button onClick={this.onPrevClick}>prev</button>
          <button onClick={this.onNextClick}>next</button>
        </div>
      </div>
    );
  }
}
