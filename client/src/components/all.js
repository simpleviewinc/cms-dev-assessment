import React, {Component} from 'react';
import Post from './post';
import axios from 'axios';

class All extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listings: props.listings
        };
    }

    componentDidMount() {
        axios
        .get("https://sv-reqres.now.sh/api/listings")
        .then(res => this.setState({ listings: res.data.data }))
        .catch(err => console.log(err))
      }

    render() {
        console.log(this.state.listings)

        return (
            <div>
                <ul>
                    {this.state.listings.map(listing => (
                        <Post listing={listing} key={listing.recid}/>
                    ))}
                </ul>
            </div>
        );
    }
}

export default All;