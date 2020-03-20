import React, {Component} from 'react';
import axios from 'axios';
import Listing from './listing';

class Listings extends Component {
  constructor(props) {
    super(props);
    this.state = {
        listings: []
    };
}

async componentDidMount() {
  await axios
  .get("https://sv-reqres.now.sh/api/listings")
  .then(res => this.setState({ listings: res.data.data }))
  .catch(err => console.log(err))
}

  render() {
  return (
    <div>
      <ul>
        {this.state.listings.map(listing => (
          <Listing listing={listing} key={listing.recid}/>
        ))}
      </ul>
    </div>
  );
  }
}

export default Listings;