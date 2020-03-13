import React from 'react';
import './App.css';

import axios from 'axios';
import{ Route, NavLink } from 'react-router-dom';

function App() {


  return (
    <div className="background">
      <nav className="navbar">
        <NavLink to="/all">
          <div> All </div>
        </NavLink>
        <NavLink to="/listings">
          <div> Listings </div>
        </NavLink>
        <NavLink to="/events">
          <div> Events </div>
        </NavLink>
        <NavLink to="/offers">
          <div> Offers </div>
        </NavLink>
      </nav>
      <div className="App">
        <Route path="/all"/>

        <Route path="/listings"/>

        <Route path="/events"/>

        <Route path="/offers"/>
      </div>
    </div>
  );
}

export default App;
