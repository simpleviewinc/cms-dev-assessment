import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";

export class Nav extends Component {
  render() {
    console.log(this.props);
    return (
      <div
        style={{
          display:
            this.props.location.pathname === "/part-two" ? "none" : "block"
        }}
      >
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
export default withRouter(Nav);
