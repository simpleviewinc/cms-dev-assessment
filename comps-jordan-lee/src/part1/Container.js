import React, { Component } from "react";

import styled from "styled-components";
import axios from "axios";

import placeholder from "../500.jpg";
import Card from "./Card";
import { theme } from "../theme/globalStyle";

const Container = styled.div`
  flex-wrap: wrap;
  display: flex;
  max-width: 1200px;
  text-align: center;
  margin: 3em auto;
`;

class Part1 extends Component {
  state = {
    listings: []
  };
  async componentDidMount() {
    const listings = await axios
      .get("https://sv-reqres.now.sh/api/listings/?per_page=6")
      .then(response => response.data.data)
      .catch(err => console.log(err));

    this.setState({ listings });
  }

  render() {
    const { listings } = this.state;

    return (
      <Container>
        {listings &&
          listings.map(listing => <Card key={listing.title} card={listing} />)}
      </Container>
    );
  }
}

export default Part1;
