import React, {useState, useEffect} from "react";
import Container from "../components/Container";
import API from "../utils/API";
import Button from 'react-bootstrap/Button'

import placeholder from '../assets/fallback.jpg'
import Listings from "../components/Listings";

function Main(props) {

    const [all, setAll] = useState([]);
    const [listings, setListings] = useState([]);
    const [events, setEvents] = useState([]);
    const [offers, setOffers] = useState([]);

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
        const halfListings = allListings.slice(0, 6);
        setAll(halfListings, ...all);
    }

    const createEvents = res => {
        const res2 = res
        const doubleEvents = res.data.data.concat(res2.data.data)
        let allEvents = []
        doubleEvents.forEach((newEvent, index) => {
            newEvent.id = index;
            allEvents.push(newEvent);
        });
        setEvents(allEvents, ...events);
        const halfEvents = allEvents.slice(0, 6);
        setAll(halfEvents, ...all);
    }

    const createOffers = res => {
        const res2 = res
        const doubleOffers = res.data.data.concat(res2.data.data)
        let allOffers = []
        doubleOffers.forEach((newOffer, index) => {
            newOffer.id = index;
            allOfferss.push(newListing);
        });
        setOffers(allOffers, ...offers)
        const halfOffers = allOffers.slice(0, 6);
        setAll(halfOffers, ...all);
    }

    const getListings = () => {
        API.listings()
            .then(createListings)
            .catch(err => console.log(err));
    };

    const getEvents = () => {
        API.events()
            .then(createEvents)
            .catch(err => console.log(err));
    };

    const getOffers = () => {
        API.offers()
            .then(createOffers)
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

export default Main;