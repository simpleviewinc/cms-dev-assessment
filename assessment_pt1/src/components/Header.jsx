import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  state = {
    buttons: [
      { id: 1, value: "All" },
      { id: 2, value: "Listings" },
      { id: 3, value: "Offers" },
      { id: 4, value: "Events" }
    ]
  };

  render() {
    const button_list_items = this.state.buttons.map(button => {
      return (
        <li key={button.id}>
          <Link
            to={
              "/" + (button.value === "All" ? "" : button.value.toLowerCase())
            }
            className="btn btn-sm nav-link"
          >
            {button.value}
          </Link>
        </li>
      );
    });

    return (
      <header>
        <nav className="navbar">
          <ul className="nav">{button_list_items}</ul>
        </nav>
      </header>
    );
  }
}

export default Header;
