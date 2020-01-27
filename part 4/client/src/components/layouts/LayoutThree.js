import React from 'react';
import GridCard from './../gridCard/GridCard';
import './Layouts.scss';

const LayoutThree = ({ listings, addToIndex }) => {
  let classnames = ['left', 'bottom', 'side'];

  return (
    <div className="grid layout-three">
      {listings.map((listing, index) => {
        return (
          <GridCard
            nameOfClass={classnames[index]}
            title={listing.title}
            index={index + addToIndex}
            key={listing.title}
            img={listing.mediaurl}
          />
        );
      })}
    </div>
  );
};

export default LayoutThree;
