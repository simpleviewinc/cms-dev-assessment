import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      selected: "All"
    };
  }

  handleClick = (e, value) => {
    e.preventDefault();
    this.setState(
      {
        selected: value
      },
      () => {
        this.props.filterDisplay(this.state.selected);
      }
    );
  };

  render() {
    return (
      <div className="header-container">
        <div className="header">
          <button onClick={e => this.handleClick(e, "All")}>All</button>
          <button onClick={e => this.handleClick(e, "Listings")}>Listings</button>
          <button onClick={e => this.handleClick(e, "Events")}>Events</button>
          <button onClick={e => this.handleClick(e, "Offers")}>Offers</button>
        </div>
      </div>
    );
  }
}

export default Header;
