import React from 'react';
import GridCard from './../gridCard/GridCard';
import './Layouts.scss';

const LayoutTwo = ({ listings, addToIndex }) => {
  let classnames = [
    'topleft',
    'leftbottom',
    'topmiddle',
    'middlebottom',
    'aside'
  ];
  return (
    <div className="grid layout-two">
      {listings.map((listing, index) => {
        return (
          <GridCard
            nameOfClass={classnames[index]}
            index={index + addToIndex}
            title={listing.title}
            img={listing.mediaurl}
            key={listing.title}
          />
        );
      })}
    </div>
  );
};

export default LayoutTwo;
