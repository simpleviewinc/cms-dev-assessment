import React, { useState } from 'react';
import Filters from './components/filters/Filters';
import Card from './components/card/Card';
import Http from './components/hooks/Http';

import './App.scss';

function App() {
  const [currentFilter, setCurrentFilter] = useState('all');
  const [data, isLoading] = Http();

  const changeFilter = e => {
    setCurrentFilter(e.target.value);
  };

  return !isLoading ? (
    <div className="App">
      <div className="container">
        <Filters currentFilter={currentFilter} changeFilter={changeFilter} />
        <div className="grid">
          {data[currentFilter].map(listing => {
            return (
              <Card
                title={listing.title}
                description={listing.description}
                img={listing.mediaurl}
              />
            );
          })}
        </div>
      </div>
    </div>
  ) : (
    <div className="container">
      <h1 className="center header-primary">Loading...</h1>
    </div>
  );
}

export default App;
