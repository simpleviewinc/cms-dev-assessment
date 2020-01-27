import React from 'react';
import Http from './components/hooks/Http';
import Card from './components/card/Card';

import './App.scss';

function App() {
  const [listings, isLoading] = Http();

  return !isLoading ? (
    <div className="App">
      <div className="container">
        <div className="grid">
          {listings.map(listing => {
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
    <h1 className="center header-primary">Loading...</h1>
  );
}

export default App;
