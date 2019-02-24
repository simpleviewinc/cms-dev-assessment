import React, { Component } from "react";
class CompFour extends Component {
  addDefaultSrc(ev) {
    ev.target.src = require("../fallback.jpg");
  }

  render() {
    const listingsData = this.props.context.listingsData;

    // this code is almost the same except we use the random array from our context instead of the normal one
    const pages = listingsData.randomPages[listingsData.pageIndex];

    const layout = [
      ["large", "large", "short", "short", "short"],
      ["mid", "mid", "mid", "mid", "thin"],
      ["large", "large", "giant"],
      ["giant", "giant"]
    ];

    return (
      <>
        <div className="comp-container">
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
export default CompFour;
