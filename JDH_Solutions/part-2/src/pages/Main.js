import React, {useState, useEffect} from "react";
import Container from "../components/Container";
import API from "../utils/API";
import Button from 'react-bootstrap/Button'

import All from "../components/All";
import Listings from "../components/Listings";
import Events from "../components/Events";
import Offers from "../components/Offers";

function Main(props) {

    const [all, setAll] = useState([]);
    const [listings, setListings] = useState([]);
    const [events, setEvents] = useState([]);
    const [offers, setOffers] = useState([]);

    const [content, setContent] = useState('all');

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
        setAll(prev => [...prev, ...halfListings]);
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
        setAll(prev => [...prev, ...halfEvents]);
    }

    const createOffers = res => {
        const res2 = res
        const doubleOffers = res.data.data.concat(res2.data.data)
        let allOffers = []
        doubleOffers.forEach((newOffer, index) => {
            newOffer.id = index;
            allOffers.push(newOffer);
        });
        setOffers(allOffers, ...offers)
        const halfOffers = allOffers.slice(0, 6);
        setAll(prev => [...prev, ...halfOffers]);

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

    useEffect(() => {
        if (all.length === 0) {
            getListings();
            getEvents();
            getOffers();
        }
        else {
            return
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [all])

    return (
        <Container>
            <Button id='all' onClick={() => setContent('all')}>All</Button>
            <Button id='listings' onClick={() => setContent('listings')}>Listings</Button>
            <Button id='events' onClick={() => setContent('events')}>Events</Button>
            <Button id='offers' onClick={() => setContent('offers')}>Offers</Button>
            {content === 'all' && all.length === 18 ?
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