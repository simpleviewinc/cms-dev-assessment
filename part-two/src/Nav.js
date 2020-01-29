import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Nav extends Component {
  render() {
    return (
      <div>
        <nav className="nav-container">
          <NavLink className="NavLink" exact to="/">
            All
          </NavLink>
          <NavLink className="NavLink" to="/listings">
            Listings
          </NavLink>
          <NavLink className="NavLink" to="/events">
            Events
          </NavLink>
          <NavLink className="NavLink" to="/offers">
            Offers
          </NavLink>
        </nav>
      </div>
    );
  }
}
