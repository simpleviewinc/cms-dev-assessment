import React, { useState, useEffect } from 'react';
import Grid from './components/grid/Grid';
import axios from 'axios';
import { mapDataToCards } from './utils';

import './App.scss';

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        let listings = await axios.get('http://sv-reqres.now.sh/api/listings');
        setData([...listings.data.data]);
        setIsLoading(false);
      } catch (err) {
        throw new Error(err);
      }
    };
    fetchData();
  }, []);

  let content = <h1>Loading...</h1>;
  if (data.length > 0 && !isLoading) {
    // maps data returned from api into subarrays of grid cards.
    let gridCards = mapDataToCards(data);
    // each array of 3 cards gets its own grid.
    content = gridCards.map((listings, index) => {
      return <Grid key={index}>{[...listings]}</Grid>;
    });
  }

  return (
    <div className="App">
      <div className="container">{content}</div>
    </div>
  );
}

export default App;
