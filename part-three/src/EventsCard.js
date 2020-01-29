import React, { Component } from "react";
import "./EventsCard.css";
import fallback from "./fallback.jpg";

export default class EventsCard extends Component {
  state = {
    shouldLoadFallback: false
  };
  render() {
    return (
      <div className={`listing ${this.props.className}`}>
        <div className="listing-img">
          {this.state.shouldLoadFallback && <img src={fallback} />}
          {!this.state.shouldLoadFallback && (
            <img
              src={this.props.listing.mediaurl}
              onError={() => {
                this.setState({ shouldLoadFallback: true });
              }}
            />
          )}
        </div>
        <h4 className="listing-title">{this.props.listing.title}</h4>
        <p className="listing-body">{this.props.listing.description}</p>
      </div>
    );
  }
}
