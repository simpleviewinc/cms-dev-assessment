import React, { Component } from "react";
import fallback_image from "./../images/fallback.jpg";

class OfferComponent extends Component {
  constructor(props) {
    super();
    this.state = {
      imageurl:
        props.article && props.article.mediaurl
          ? props.article.mediaurl
          : fallback_image,
      title:
        props.article && props.article.title
          ? props.article.title
          : "Title unavailable",
      description:
        props.article && props.article.description
          ? props.article.description
          : "Description unavailable",
      recid:
        props.article && props.article.recid
          ? props.article.recid
          : "Description unavailable",
      redeemStart:
        props.article && props.article.redeemstart
          ? props.article.redeemstart
          : "Description unavailable"
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
              <strong>{this.state.title}</strong>
            </div>
            <div className="panel-wrapper">
              <a href="#show" className="show btn" id="show">
                Read More
              </a>
              <a href="#hide" className="hide btn" id="hide">
                Read Less
              </a>
              <p className="artice-description-container panel">
                {this.state.description}
              </p>
              <div className="fade"></div>
            </div>
          </div>
        </div>
      </article>
    );
  }
}

export default OfferComponent;
