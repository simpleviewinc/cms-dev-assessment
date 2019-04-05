import React, { Component } from "react";

import styled from "styled-components";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  withRouter
} from "react-router-dom";
import axios from "axios";

// import Page1 from "./Pages";
import { Page1, Page2, Page3, Page4 } from "./Pages";

/*
NOTE:
* I think I would approach this differently if there were a dynamic or
  unknowable number of cards to show. Since there are 15 cards spread across
  4 pages, I'll create a component for each page.
  To do this with a dynamic number of cards...TBD

* Assumption that there'll always be exactly 15 data items
*/

//Static routing array
const routes = [
  { path: "/part3/page1" },
  { path: "/part3/page2" },
  { path: "/part3/page3" },
  { path: "/part3/page4" }
];

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0px auto;
  text-align: center;
`;
const Button = styled.button`
  flex: 0 1 20%
  padding: 5px;
  margin-right: 2em;
  margin-bottom: 1em;
  border-radius: 4px;
  font-weight: 900;
  font-size: 1.2em;
  cursor: pointer;
  color: white;
  letter-spacing: 0.1em;
  background: palevioletred;
  filter: drop-shadow(2px 3px 4px palevioletred);
`;
const Navs = styled.div`
  display: flex;
  flex: 1 0 100%;
  flex-wrap: wrap;
  justify-content: center;
  background: white;
  z-index: 999;
  a {
    margin: 1em 2em;
    font-size: 1.5em;
    color: palevioletred;
  }
`;
const Title = styled.div`
  display: flex;
  flex: 1 0 100%;
  flex-wrap: wrap;
  justify-content: flext-start;
  margin-top: 2em;
  margin-bottom: 0.1em;
  background: white;
  font-size: 2em;
  font-weight: 900;
  color: palevioletred;
`;

// Big help from hinsxd at this CodeSandbox https://codesandbox.io/s/jj3768ono3
class Part3Container extends Component {
  // Lifecycle to generate state from props. Use this to return the
  // prevRoute and nextRoute
  static getDerivedStateFromProps(props, state) {
    // Find index of route that matches current path
    const index = routes.findIndex(
      route => route.path === props.location.pathname
    );
    // If we are on index 2, then previous index needs to be 1
    // If on on index 0, then 0 - 1. Then -1 + noOfRoutes = 3. Remainder of 3 % 4 is 3. 👍
    const noOfRoutes = routes.length;
    const prevRoute = routes[(index - 1 + noOfRoutes) % noOfRoutes].path;
    const nextRoute = routes[(index + 1 + noOfRoutes) % noOfRoutes].path;
    // Put prevRoute and nextRoute in state
    return { prevRoute, nextRoute };
  }

  render() {
    // Extract prevRoute and nextRoute from this.tate
    const { prevRoute, nextRoute } = this.state;
    console.log(prevRoute, nextRoute);
    // Extract push() from this.props.history,
    // which is injected by withRouter(Header)
    const {
      history: { push }
    } = this.props;
    return (
      <Navs>
        <Button onClick={() => push(prevRoute)}>Back</Button>
        <Button onClick={() => push(nextRoute)}>Next</Button>
      </Navs>
    );
  }
}

const Part3WithRouter = withRouter(Part3Container);

class Part3 extends Component {
  state = { listings: [] };
  async componentDidMount() {
    const listings = await axios
      .get("https://sv-reqres.now.sh/api/listings/?per_page=15")
      .then(response => response.data.data)
      .catch(err => console.log(err));

    this.setState({ listings });
  }
  render() {
    const { listings } = this.state;
    console.log("listings2", listings);

    return (
      <>
        {listings.length > 0 && (
          <>
            <Switch>
              <Route
                path={"/part3/page1"}
                render={props => {
                  return <Page1 listings={listings.slice(0, 5)} />;
                }}
              />
              <Route
                path={"/part3/page2"}
                render={props => {
                  return <Page2 listings={listings.slice(5, 10)} />;
                }}
              />
              <Route
                path={"/part3/page3"}
                render={props => {
                  return <Page3 listings={listings.slice(10, 13)} />;
                }}
              />
              <Route
                path={"/part3/page4"}
                render={props => {
                  return <Page4 listings={listings.slice(13, 15)} />;
                }}
              />
            </Switch>
            <Part3WithRouter />
          </>
        )}
      </>
    );
  }
}

export default Part3;
