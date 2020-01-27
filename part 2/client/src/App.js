import React, { useState, useEffect } from 'react';
import { mapDataToCards } from './utils';
import Filters from './components/filters/Filters';
import Grid from './components/grid/Grid';
import axios from 'axios';

import './App.scss';

function App() {
  const [currentFilter, setCurrentFilter] = useState('all');
  const [isLoading, setIsLoading] = useState();
  const [data, setData] = useState({
    all: [],
    listings: [],
    events: [],
    offers: []
  });

  const changeFilter = e => {
    setCurrentFilter(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        let listings = await (
          await axios.get('http://sv-reqres.now.sh/api/listings')
        ).data.data;
        let events = await (
          await axios.get('http://sv-reqres.now.sh/api/events')
        ).data.data;
        let offers = await (
          await axios.get('http://sv-reqres.now.sh/api/offers')
        ).data.data;
        setData({
          all: [...listings, ...events, ...offers],
          listings,
          events,
          offers
        });
        setIsLoading(false);
      } catch (err) {
        throw new Error(err);
      }
    };
    fetchData();
  }, []);

  let content = <h1 className="center header-primary">Loading...</h1>;
  if (data.all.length > 0 && !isLoading) {
    // maps data returned from api into subarrays of grid cards.
    let gridCards = mapDataToCards(data[currentFilter]);
    // each array of 3 cards gets its own grid.
    content = gridCards.map((listings, index) => {
      return <Grid key={index}>{[...listings]}</Grid>;
    });
  }

  return (
    <div className="App">
      <div className="container">
        <Filters currentFilter={currentFilter} changeFilter={changeFilter} />
        {content}
      </div>
    </div>
  );
}

export default App;
