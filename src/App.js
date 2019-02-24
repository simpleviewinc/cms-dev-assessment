import React, { Component } from "react";
import { Route } from "react-router-dom";
import ListingsProvider, {
  ListingsContext
} from "./comps/contexts/listingsProvider";

import "./comps/css/index.css";


import Directory from "./directory";
import Listings from "./comps/part 1-2/compOne";
import Filter from "./comps/part 1-2/compTwo";
import Pages from "./comps/part 3-4/compThree";
import Random from "./comps/part 3-4/compFour";

class App extends Component {
  render() {
    //  render my routes pass them context
    return (
      <div className="App">
        <Route exact path="/" render={() => <Directory />} />
        <ListingsProvider>
          <ListingsContext.Consumer>
            {context => (
              <>
                <Route
                  exact
                  path="/listings"
                  render={() => <Listings context={context} />}
                />

                <Route
                  exact
                  path="/filter"
                  render={() => <Filter context={context} />}
                />
                <Route
                  exact
                  path="/pages"
                  render={() => <Pages context={context} />}
                />
                <Route
                  exact
                  path="/random"
                  render={() => <Random context={context} />}
                />
              </>
            )}
          </ListingsContext.Consumer>
        </ListingsProvider>
      </div>
    );
  }
}

export default App;
