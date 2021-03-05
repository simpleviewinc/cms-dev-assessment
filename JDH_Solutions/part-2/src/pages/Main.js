import React, {useState, useEffect} from "react";
import Container from "../components/Container";
import API from "../utils/API";
import Button from 'react-bootstrap/Button'

import placeholder from '../assets/fallback.jpg'
import Listings from "../components/Listings";

function PageContent(props) {

    const [all, setAll] = useState([]);
    const [listings, setListings] = useState([]);
    const [events, setEvents] = useState([]);
    const [offers, setoffers] = useState([]);

    const [content, setContent] = useState('all');

    useEffect(() => {
        if (all.length === 0) {
            getListings();
            getEvents();
            getOffers();
        }
        else {
            return
        }
    }, [])

    const createListings = res => {
        const res2 = res
        const doubleListings = res.data.data.concat(res2.data.data)
        let allListings = []
        doubleListings.forEach((newListing, index) => {
            newListing.id = index;
            allListings.push(newListing);
        });
        setListings(allListings, ...listings)
    }

    const getListings = () => {
        API.listings()
            .then(createListings)
            .catch(err => console.log(err));
    };

    return (


        <Container>
            <Button id='all' onClick={() => setContent('all')}>All</Button>
            <Button id='listings' onClick={() => setContent('listings')}>Listings</Button>
            <Button id='events' onClick={() => setContent('events')}>Events</Button>
            <Button id='offers' onClick={() => setContent('offers')}>Offers</Button>
            {content === 'all' ?
                <All all={all}></All>
                : content === 'listings' ?
                    <Listings listings={listings}></Listings>
                    : content === 'events' ?
                        <Events events={events}></Events>
                        : content === 'offers' ?
                            <Offers offers={offers}></Offers>
                            : <div>'loading'</div>}
        </Container >
    );
}

export default PageContent;