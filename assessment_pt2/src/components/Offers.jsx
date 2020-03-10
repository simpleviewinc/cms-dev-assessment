import React, { Component } from "react";
import OfferComponent from "./OfferComponent";

class Offers extends Component {
  state = {
    loading: false,
    offers: []
  };

  componentDidMount() {
    this.setState({ loading: true });
    fetch("https://sv-reqres.now.sh/api/offers")
      .then(response => response.json())
      .then(data => {
        this.setState({ offers: data.data, loading: false });
      });
  }

  render() {
    const loading_text = 'The "offers" api is loading';

    const offers = this.state.offers.map(offer => {
      let indexValue = this.state.offers.indexOf(offer);
      let offer_class_name = "data-components-container ";

      offer_class_name +=
        indexValue === 0 || indexValue % 5 === 0 ? "double" : "single";

      return (
        <div key={indexValue} className={offer_class_name}>
          <OfferComponent article={offer} />
        </div>
      );
    });

    return (
      <main className="container">
        <div className="row">{this.state.loading ? loading_text : offers}</div>
      </main>
    );
  }
}

export default Offers;
