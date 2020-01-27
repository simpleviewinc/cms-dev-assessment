import React, { useState } from 'react';
import LayoutWrapper from './hocs/LayoutWrapper';
import Http from './hooks/Http';
import _ from 'lodash';
import './App.scss';

function App() {
  const [listings, isLoading, setListings] = Http();
  const [currentLayout, setCurrentLayout] = useState(0);

  const nextPage = () => {
    setListings(prev => _.shuffle(prev));
    if (currentLayout === 3) {
      setCurrentLayout(0);
    } else {
      setCurrentLayout(prev => prev + 1);
    }
  };

  const prevPage = () => {
    setListings(prev => _.shuffle(prev));
    if (currentLayout === 0) {
      setCurrentLayout(3);
    } else {
      setCurrentLayout(prev => prev - 1);
    }
  };

  return !isLoading && listings.length > 0 ? (
    <div className="container">
      <LayoutWrapper listings={listings} currentLayout={currentLayout} />
      <div className="btn-container">
        <ul>
          <li onClick={prevPage}>
            <i class="fas fa-arrow-left"></i>Prev.
          </li>
          <li onClick={nextPage}>
            Next <i class="fas fa-arrow-right"></i>
          </li>
        </ul>
      </div>
    </div>
  ) : (
    <div className="container">
      <h1>...Loading</h1>
    </div>
  );
}

export default App;
