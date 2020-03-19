import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import { Route, NavLink } from 'react-router-dom';

import All from './components/all';
import Events from './components/events';
import Listings from './components/listings';
import Offers from './components/offers';

class App extends Component {
  constructor() {
    super();
    this.state = {
      listings: []
    };
  }

  componentDidMount() {
    axios
    .get("https://sv-reqres.now.sh/api/listings")
    .then(res => this.setState({ listings: res.data.data }))
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">

        <nav className="nav">
          <NavLink to="/" className="link"> All </NavLink>
          <NavLink to="/listings" className="link"> Listings </NavLink>
          <NavLink to="/events" className="link"> Events </NavLink>
          <NavLink to="/offers" className="link"> Offers </NavLink>
        </nav>

        <div>
          <Route 
            exact path="/" 
            render={props => <All listings={this.state.listings} {...props} />}
          />
          <Route 
            path="/listings" 
            render={props => <Events  {...props} />}
          />
          <Route 
            path="/events" 
            render={props => <Listings {...props} />}
          />
          <Route 
            path="/offers" 
            render={props => <Offers {...props} />}
          />
        </div>

      </div>
    );
  }
}

export default App;
