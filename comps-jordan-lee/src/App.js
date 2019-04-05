import React, { Component } from "react";
import "./App.css";

import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Part1 from "./part1/Container";
import Part2 from "./part2/Container";
import Part3 from "./part3/Container";
import Part4 from "./part4/Container";

const Navs = styled.div`
  flex-direction: column;
  display: flex;
  width: 100wh;
  height: 100vh;
  align-items: center;
  justify-content: space-around;
  a {
    font-size: 1.5em;
    color: palevioletred;
  }
`;

function Nav() {
  return (
    <Navs>
      <Link to={"/part1"}>Part 1</Link>
      <Link to={"/part2"}>Part 2</Link>
      <Link to={"/part3/page1"}>Part 3</Link>
      <Link to={"/part4/page1"}>Part 4</Link>
    </Navs>
  );
}

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Nav} />
          <Route path="/part1" component={Part1} />
          <Route path="/part2" component={Part2} />
          <Route path="/part3" component={Part3} />
          <Route path="/part4" component={Part4} />
        </Switch>
      </Router>
    );
  }
}

export default App;
