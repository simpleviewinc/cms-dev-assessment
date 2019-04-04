import React, { Component } from "react";

import styled from "styled-components";
import axios from "axios";

import placeholder from "../500.jpg";
import Card from "../part1/Card";
import { theme } from "../theme/globalStyle";

const Container = styled.div`
  flex-wrap: wrap;
  display: flex;
  max-width: 1200px;
  text-align: center;
  margin: 0px auto;
`;
const Button = styled.button`
  flex: 0 1 20%
  cursor: pointer;
  background: palevioletred;
  color: white;
  padding: 5px;
  margin-right: 2em;
  margin-bottom: 1em;
  border-radius: 4px;
  font-weight: 900;
  font-size: 1.2em;
  letter-spacing: 0.1em;
  filter: drop-shadow(2px 3px 4px palevioletred);
`;
const Navs = styled.div`
  background: white;
  display: flex;
  flex: 1 0 100%;
  flex-wrap: wrap;
  justify-content: center;
  z-index: 999;
`;
const Title = styled.div`
  background: white;
  display: flex;
  flex: 1 0 100%;
  flex-wrap: wrap;
  justify-content: flext-start;
  margin-top: 2em;
  margin-bottom: 0.1em;
  font-size: 2em;
  font-weight: 900;
  color: palevioletred;
`;

class Part2 extends Component {
  state = {
    all: [],
    cards: [],
    showAll: true,
    showListings: true,
    showEvents: true,
    showOffers: true,
    listings: [],
    events: [],
    offers: []
  };
  onGetListings = e => {};
  renderCards = e => {
    // e.preventDefault();
    const category = e.target.name;
    console.log(category);

    switch (category) {
      case "listings":
        console.log("asdfasdf");
        this.setState({
          showListings: true,
          showEvents: false,
          showOffers: false
        });
        break;
      case "events":
        this.setState({
          showListings: false,
          showEvents: true,
          showOffers: false
        });
        break;
      case "offers":
        this.setState({
          showListings: false,
          showEvents: false,
          showOffers: true
        });
        break;
      default:
        this.setState({
          showListings: true,
          showEvents: true,
          showOffers: true
        });
    }
  };
  async componentDidMount() {
    const listings = await axios
      .get("https://sv-reqres.now.sh/api/listings/?per_page=6")
      .then(response => response.data.data)
      .catch(err => console.log(err));

    const events = await axios
      .get("https://sv-reqres.now.sh/api/events/?per_page=6")
      .then(response => response.data.data)
      .catch(err => console.log(err));

    const offers = await axios
      .get("https://sv-reqres.now.sh/api/offers/?per_page=6")
      .then(response => response.data.data)
      .catch(err => console.log(err));

    console.log(listings);
    this.setState({
      cards: [].concat.apply([], [listings, events, offers]),
      listings,
      events,
      offers,
      all: { listings, events, offers }
    });
  }

  render() {
    const {
      cards,
      showListings,
      showEvents,
      showOffers,
      listings,
      events,
      offers
    } = this.state;

    return (
      <Container>
        <Navs>
          <Button onClick={this.renderCards} name="all">
            All
          </Button>
          <Button onClick={this.renderCards} name="listings">
            Listings
          </Button>
          <Button onClick={this.renderCards} name="events">
            Events
          </Button>
          <Button onClick={this.renderCards} name="offers">
            Offers
          </Button>
          {showListings && <Title>Listings</Title>}
          {showListings &&
            listings.map(card => <Card key={card.recid} card={card} />)}
          {showEvents && <Title>Events</Title>}
          {showEvents &&
            events.map(card => <Card key={card.recid} card={card} />)}
          {showOffers && <Title>Offers</Title>}
          {showOffers &&
            offers.map(card => <Card key={card.recid} card={card} />)}
        </Navs>
      </Container>
    );
  }
}

// {listings.map(card => <Card key={card.title} card={card} />)}

export default Part2;
