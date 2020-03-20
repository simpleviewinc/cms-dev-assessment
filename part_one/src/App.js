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
      listings: [],
      events: [],
      offers: [],
    };
  }

  async componentDidMount() {
    await axios.all([axios.get('https://sv-reqres.now.sh/api/listings'), 
                     axios.get('https://sv-reqres.now.sh/api/events'),
                     axios.get('https://sv-reqres.now.sh/api/offers')])
                .then(axios.spread((listingsRes, eventsRes, offersRes) => {
                        console.log(listingsRes.data.data, eventsRes.data.data, offersRes.data.data)
                        this.setState({ listings: listingsRes.data.data, events: eventsRes.data.data, offers: offersRes.data.data })
                }))
                .catch(err => console.log(err))
  }

  render() {
    return (
      <div className='App'>

        <nav className='nav'>
          <NavLink exact to='/' className='link' activeClassName='link-active'> All </NavLink>
          <NavLink exact to='/listings' className='link' activeClassName='link-active'> Listings </NavLink>
          <NavLink exact to='/events' className='link' activeClassName='link-active'> Events </NavLink>
          <NavLink exact to='/offers' className='link' activeClassName='link-active'> Offers </NavLink>
        </nav>

        <div>
          <Route 
            exact path='/'
            render={props => <All {...props} />}
          />
          <Route 
            path='/listings'
            render={props => <Listings listings={this.state.listings} {...props} />}
          />
          <Route 
            path='/events'
            render={props => <Events listings={this.state.listings} {...props} />}
          />
          <Route 
            path='/offers'
            render={props => <Offers listings={this.state.listings} {...props} />}
          />
        </div>

      </div>
    );
  }
}

export default App;
