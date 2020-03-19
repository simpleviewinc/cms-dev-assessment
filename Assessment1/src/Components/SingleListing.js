import React, { Component } from "react";
import "./SingleListing.css";
import fallback from "../assets/fallback.jpg";

class SingleListing extends Component {
    constructor(){
        super()
        this.state = {
            windowWidth: ""
        }
    }

    componentDidMount(){
        window.addEventListener("resize", this.updateWindowDimensions.bind(this));

    }

    updateWindowDimensions = () => {
        this.setState({ windowWidth: window.innerWidth }, () => console.log(this.state.windowWidth));
    }

  render() {
      const {windowWidth} = this.state
      const {id} = this.props
    return (
      <div className={
          id === 0 && windowWidth > 1025 ? "long-listing" 
          : id === 5 && windowWidth > 1025 ? "tall-listing" :"listing-container"}>
        <div className="image-container">
          <img
            src={this.props.image}
            onError={e => {
              e.target.onerror = null;
              e.target.src = fallback;
            }}
          />
        </div>
        <div className={"t-d-container"}>
        <h1>{this.props.title}</h1>
        <p>{this.props.description}</p>
        </div>
      </div>
    );
  }
}

export default SingleListing;
