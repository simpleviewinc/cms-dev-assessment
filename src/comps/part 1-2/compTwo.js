import React, { Component } from "react";
class FilterAll extends Component {
  state = {
    show: "hidden"
  };
  addDefaultSrc(ev) {
    ev.target.src = require("../fallback.jpg");
  }

  showOne(title) {
    if (title === this.state.show) {
      return "show-content";
    }
  }

  render() {
    let grid = ["one", "two", "three", "four", "five", "six"];
    // this is an array i use for created buttons, fort our filter feature
    let buttons = ["All", "Listings", "Events", "Offers"];
    let filteredArr = this.props.context.actions.filteredArr();

    return (
      <>
        <div className="filter-buttons">
          {buttons.map(text => (
            <>
              <button
                value={text.toLowerCase()}
                name={text.toLowerCase()}
                onClick={this.props.context.actions.setFilter}
              >
                {text}
              </button>
            </>
          ))}
        </div>
        <div className="listings-container">
          {filteredArr ? (
            <>
              {filteredArr.map(item => {
                if (grid.length === 0) {
                  grid = ["one", "two", "three", "four", "five", "six"];
                }
                return (
                  <div
                    key={item.title + grid[0]}
                    className={`box ${grid.shift()} ${this.showOne(
                      item.title
                    )}`}
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
                        <button
                          onClick={() => this.setState({ show: "hidden" })}
                        >
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
          ) : (
            <div>waiting</div>
          )}
        </div>
      </>
    );
  }
}
export default FilterAll;
