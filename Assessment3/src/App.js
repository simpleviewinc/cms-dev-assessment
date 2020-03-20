import React, { Component } from "react";
import ImageContainer from "./Components/ImageContainer/ImageContainer";
import Footer from "./Components/Footer/Footer";
import axios from "axios";

import "./App.css";

/* Not exactly like mockup. With some more I could get it perfect */

class App extends Component {
  constructor() {
    super();
    this.state = {
      listings: [],
      imagesDisplayed: "<"
    };
  }
  componentDidMount() {
    this.getlistings();
  }
  //http request to api and response is stored in state
  getlistings = () => {
    axios.get(`https://sv-reqres.now.sh/api/listings`).then(res => {
      console.log(res.data.data);
      this.setState({
        listings: res.data.data
      });
    });
  };

  //onclick from footer updates state and displays new part of listings array

  updateImageDisplay = () => {
    const { imagesDisplayed } = this.state;
    if (imagesDisplayed === ">=") {
      this.setState({
        imagesDisplayed: "<"
      });
    } else if (imagesDisplayed === "<") {
      this.setState({
        imagesDisplayed: ">="
      });
    }
  };

  render() {
    const { listings, imagesDisplayed } = this.state;
    var images = listings.map((image, i, array) => {
      {
        /* boolean operator, stored in state, is evaluated and determines what part
      of array rendered */
      }
      if (eval(array.indexOf(image) + imagesDisplayed + 4)) {
        console.log(image);
        return (
          <ImageContainer
            imagesDisplayed={imagesDisplayed}
            id={i}
            mediaurl={image.mediaurl}
            title={image.title}
          />
        );
      }
    });
    return (
      <div className="App">
        <div className={"image-display-1"}>{images}</div>
        <Footer updateImageDisplay={this.updateImageDisplay} />
      </div>
    );
  }
}

export default App;
