import React, {Component} from 'react';
import './listing.css';
import fallback from '../img/fallback.jpg'

class Listing extends Component {
  constructor(props) {
      super(props);
  }

  render() {
    return (
      <div className="grid">
        <img src={fallback} alt="Fallback Image" className="image"/> 
        {this.props.listing.title}
        {this.props.listing.description}
      </div>
    );
  }
}

export default Listing;