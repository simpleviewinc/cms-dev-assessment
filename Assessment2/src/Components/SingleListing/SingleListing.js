import React, { Component } from "react";
import "./SingleListing.css";
import fallback from "../../assets/fallback.jpg";

class SingleListing extends Component {
  constructor() {
    super();
    this.state = {
      windowWidth: ""
    };
  }
  //event listener updates state with window dimensions upon resize
  componentDidMount() {
    window.addEventListener("resize", this.updateWindowDimensions.bind(this));
  }
  //keeps track of window dimensions so classnames can change accordingly
  updateWindowDimensions = () => {
    this.setState({ windowWidth: window.innerWidth });
  };

  render() {
    const { windowWidth } = this.state;
    const { id } = this.props;
    return (
      <div
        className={
          /* checks for window width and first/last id to change className
             for 1025px view */
          id === 0 && windowWidth > 1025
            ? "long-listing"
            : id === 5 && windowWidth > 1025
            ? "tall-listing"
            : "listing-container"
        }
      >
        <div className="image-container">
          {/*props are passed from App component and fallback is
          imported if media url is broken */}
          <img
            src={this.props.image}
            onError={e => {
              e.target.onerror = null;
              e.target.src = fallback;
            }}
          />
        </div>
        <div className={"t-d-container"}>
          <h1>{this.props.title}</h1>
          <p>{this.props.description}</p>
        </div>
      </div>
    );
  }
}

export default SingleListing;
