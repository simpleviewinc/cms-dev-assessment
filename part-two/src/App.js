import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Nav from "./Nav";
import Grid from "./Grid";
import "./app.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <Nav />
        </nav>

        <main>
          <Switch>
            <Route
              exact
              path="/"
              render={props => <Grid filter="all" {...props} />}
            />
            <Route
              exact
              path="/listings"
              render={props => <Grid filter="listings" {...props} />}
            />
            <Route
              exact
              path="/events"
              render={props => <Grid filter="events" {...props} />}
            />
            <Route
              exact
              path="/offers"
              render={props => <Grid filter="offers" {...props} />}
            />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
