import React, {Component} from 'react';
import './listing.css';
import fallback from '../img/fallback.jpg'

class Listing extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='grid'>
        <img src={fallback} alt='Fallback Image' className='image'/>
        <span className='header'>{this.props.listing.title}</span>
        <span>{this.props.listing.description}</span>
      </div>
    );
  }
}

export default Listing;