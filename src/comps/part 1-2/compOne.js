import React, { Component } from "react";

class Listings extends Component {
  state = {
    show: "hidden"
  };
  // function that allows me to set up a back up img src
  addDefaultSrc(ev) {
    ev.target.src = require("../fallback.jpg");
  }
  // this allowed me to show content in only the divs I wanted.
  showOne(title) {
    if (title === this.state.show) {
      return "show-content";
    }
  }

  render() {
    // this is a grid that i am using to set the class names and than reseting after it is empty
    let grid = ["one", "two", "three", "four", "five", "six"];

    return (
      <div className="listings-container">
        {this.props.context.listingsData.listings ? (
          <>
            {this.props.context.listingsData.listings.map(item => {
              if (grid.length === 0) {
                grid = ["one", "two", "three", "four", "five", "six"];
              }
              // I am going to map over my data from context and  render each div
              return (
                <div
                  key={item.title + grid[0]}
                  className={`box ${grid.shift()} ${this.showOne(item.title)}`}
                >
                  <img
                    onError={this.addDefaultSrc}
                    src={item.mediaurl}
                    alt={item.title}
                  />

                  <div className="text-container">
                    {this.state.show !== item.title ? (
                      <button
                        className="btn read-more"
                        onClick={() => this.setState({ show: item.title })}
                      >
                        Read More
                      </button>
                    ) : (
                      <button onClick={() => this.setState({ show: "hidden" })}>
                        Close
                      </button>
                    )}
                    <h4>{item.title}</h4>

                    <p>{item.description}</p>
                  </div>
                </div>
              );
            })}
          </>
        ) : null}
      </div>
    );
  }
}
export default Listings;
