import React, { Component } from "react";
import fallback_image from "./../images/fallback.jpg";

class ArticleComponent extends Component {
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
          : "Title Unavailable",
      zip:
        props.article && props.article.zip
          ? props.article.zip
          : "Zip Unavailable",
      address1:
        props.article && props.article.address1
          ? props.article.address
          : "Address Unavailable",
      region:
        props.article && props.article.region
          ? props.article.region
          : "Region Unavailable",
      description:
        props.article && props.article.description
          ? props.article.description
          : "Description Unavailable",
      city:
        props.article && props.article.city
          ? props.article.city
          : "City Unavailable",
      state:
        props.article && props.article.state
          ? props.article.state
          : "State Unavailable",
      recid: props.article && props.article.recid ? props.article.recid : -1,
      weburl:
        props.article && props.article.weburl
          ? props.article.weburl
          : "WebUrl Unavailable",
      phone:
        props.article && props.article.phone
          ? props.article.phone
          : "Phone Unavailable",
      qualityScore:
        props.article && props.article.qualityScore
          ? props.article.qualityScore
          : "City Unavailable"
    };
  }

  render() {
    return (
      <article>
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

export default ArticleComponent;
