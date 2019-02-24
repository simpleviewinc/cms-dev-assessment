import React, { Component } from "react";
class CompThree extends Component {
  addDefaultSrc(ev) {
    ev.target.src = require("../fallback.jpg");
  }
  render() {
    const listingsData = this.props.context.listingsData;
    // get the sub array inside of pages on context
    const pages = listingsData.pages[listingsData.pageIndex];

    // layout array for setting up our reapting layout
    const layout = [
      ["large", "large", "short", "short", "short"],
      ["mid", "mid", "mid", "mid", "thin"],
      ["large", "large", "giant"],
      ["giant", "giant"]
    ];

    return (
      <>
        <div className="comp-container">

          {/* this ternary lets us wait for pages to be set than we can map out and render the current page */}
          {pages ? (
            <>
              {pages.map(item => {
                return (
                  <div
                    key={` ${Math.random() * 10000000 + 1}-${item.title}`}
                    className={`col-item ${layout[
                      listingsData.pageIndex
                    ].shift()}`}
                  >
                    {item.position < 10 ? (
                      <p>{`0${item.position} ${item.title}`}</p>
                    ) : (
                      <p>{`${item.position} ${item.title}`}</p>
                    )}

                    <img
                      onError={this.addDefaultSrc}
                      src={item.mediaurl}
                      alt={item.title}
                    />
                  </div>
                );
              })}
            </>
          ) : null}
        </div>{" "}
        {/* these buttons allow us to change the index, and that changes the array we are mapping */}
        <div className="comp-buttons">
          {" "}
          <button onClick={() => this.props.context.actions.changePage("down")}>
            <p>
              <i className="fas fa-long-arrow-alt-left" /> prev
            </p>
          </button>
          <button onClick={() => this.props.context.actions.changePage("up")}>
            <p>
              next <i className="fas fa-long-arrow-alt-right" />
            </p>
          </button>
        </div>
      </>
    );
  }
}
export default CompThree;
