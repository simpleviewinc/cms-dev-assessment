import React, {Component} from 'react';
import './all.css';
import axios from 'axios';
import Listing from './listing';
import { Row, Col } from 'react-simple-flex-grid';
import "react-simple-flex-grid/lib/main.css";

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
        await axios.all([axios.get('https://sv-reqres.now.sh/api/listings'), 
                         axios.get('https://sv-reqres.now.sh/api/events'),
                         axios.get('https://sv-reqres.now.sh/api/offers')])
                    .then(axios.spread((listingsRes, eventsRes, offersRes) => {
                            console.log(listingsRes.data.data, eventsRes.data.data, offersRes.data.data)
                            this.setState({ listings: listingsRes.data.data, events: eventsRes.data.data, offers: offersRes.data.data })
                    }))
                    .catch(err => console.log(err))
    }

    render() {
        return (
            <Row gutter={40}>
                {this.state.listings.map(listing => 
                    <Col xs={{ span: 12 }} sm={{ span: 4 }} md={{ span: 4 }} lg={{ span: 4 }} xl={{ span: 4 }}>
                        <Listing listing={listing} key={listing.recid}/>
                    </Col>
                )}
            </Row>
        );
    }
}

export default All;