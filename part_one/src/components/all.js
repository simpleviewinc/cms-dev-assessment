import React, {Component} from 'react';
import axios from 'axios';
import Listing from './listing';

class All extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listings: [],
            events: [],
            offers: [],
        };
    }

    async componentDidMount() {
        await axios.all([axios.get("https://sv-reqres.now.sh/api/listings"), 
                         axios.get("https://sv-reqres.now.sh/api/events"),
                         axios.get("https://sv-reqres.now.sh/api/offers")])
                    .then(axios.spread((listingsRes, eventsRes, offersRes) => {
                            console.log(listingsRes.data.data, eventsRes.data.data, offersRes.data.data)
                            this.setState({ listings: listingsRes.data.data, events: eventsRes.data.data, offers: offersRes.data.data })
                    }))
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

export default All;