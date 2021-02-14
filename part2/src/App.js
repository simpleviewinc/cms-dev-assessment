
import React, { useState, useEffect } from 'react';
import Listings from './components/listings'
import Events from './components/events'
import Offers from './components/offers'
import './App.css';


function App() {
  const [showComponents, setShowComponents] = useState([true, true, true])

  useEffect(() => {
    document.getElementById("all").focus();
  }, [])

  const handleAll = () => {
    setShowComponents([true, true,true])
  }
  const handleListings = () => {
    setShowComponents([true, false, false])
  }
  const handleEvents = () => {
    setShowComponents([false, true, false])
  }
  const handleOffers = () => {
    setShowComponents([false, false, true])
  }

  return (
    <div className="App">
      <section className="buttons">
        <button onClick={handleAll} id="all" >All</button>
        <button onClick={handleListings} >Listings</button>
        <button onClick={handleEvents} >Events</button>
        <button onClick={handleOffers} >Offers</button>
      </section>
      {showComponents[0] ? <Listings /> : null}
      {showComponents[1] ? <Events /> : null}
      {showComponents[2] ? <Offers /> : null}
    </div>
  );
}

export default App;
