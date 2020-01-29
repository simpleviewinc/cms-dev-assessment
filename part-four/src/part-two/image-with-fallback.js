import React, { Component } from "react";
import fallback from "../fallback.jpg";

export default class ImageWithFallback extends Component {
  state = {
    shouldLoadFallback: false
  };
  render() {
    return (
      <>
        {this.state.shouldLoadFallback && (
          <img {...this.props} src={fallback} />
        )}
        {!this.state.shouldLoadFallback && (
          <img
            {...this.props}
            src={this.props.src}
            onError={() => {
              this.setState({ shouldLoadFallback: true });
            }}
          />
        )}
      </>
    );
  }
}
