import React, { Component } from "react";
import fallback_image from "./../images/fallback.jpg";

class EventComponent extends Component {
  constructor(props) {
    super();
    this.state = {
      imageurl:
        props.article && props.article.mediaurl
          ? props.article.mediaurl
          : fallback_image,
      startDate:
        props.article && props.article.startDate
          ? props.article.startDate
          : "Start date unavailable",
      recurrence:
        props.article && props.article.recurrence
          ? props.article.recurrence
          : "Reccurrence times unavailable"
    };
  }

  render() {
    const eventDate = new Date(this.state.startDate);
    return (
      <article>
        {/*
         The image needs to take up 50% of the width and 100% height if divisible
        by 5 and not 10 ... I can accomplish this by using bootstrap grids
        */}
        <div className="article-img-container">
          <img src={this.state.imageurl} alt="img" height="100%" width="100%" />
          <div className="article-text-container">
            <div className="article-title-container">
              <strong>{eventDate.toDateString()}</strong>
            </div>
            <div className="panel-wrapper">
              <a href="#show" className="show btn" id="show">
                Read More
              </a>
              <a href="#hide" className="hide btn" id="hide">
                Read Less
              </a>
              <p className="artice-description-container panel">
                {this.state.recurrence}
              </p>
              <div className="fade"></div>
            </div>
          </div>
        </div>
      </article>
    );
  }
}

export default EventComponent;
