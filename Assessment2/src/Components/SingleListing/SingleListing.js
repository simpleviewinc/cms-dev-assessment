import React, { Component } from "react";
import "./SingleListing.css";
import fallback from "../../assets/fallback.jpg";

class SingleListing extends Component {
  render() {

    const { windowWidth, id } = this.props;

    return (
      <div
        className={
          /* checks for window width and id to change className
             for 1025px view */
          (id === 0 || id === 6 || id === 12 || id ===18) && windowWidth >= 1025
            ? "long-listing"
            : (id === 5 || id === 11 || id === 17) && windowWidth >= 1025
            ? "tall-listing"
            : "listing-container"
        }
      >
        <div className="image-container">
          {/*props are passed from App component and fallback is
          used if media url is broken */}
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
         
         
          <p>{this.props.description}
          <div className={"button-container"}>
          <button className={"rm-button"}>Read More</button>
          </div>
          </p>
        </div>
      </div>
    );
  }
}

export default SingleListing;
