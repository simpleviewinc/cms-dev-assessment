import React, { Component } from "react";
import Header from "./Header";

// route components
import Listings from "./Listings";
import Offers from "./Offers";
import Events from "./Events";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  state = {};
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Listings} />
          <Route exact path="/listings" component={Listings} />
          <Route exact path="/offers" component={Offers} />
          <Route exact path="/events" component={Events} />
        </Switch>
      </Router>
    );
  }
}

export default App;
