import React from 'react';
import GridCard from '../gridCard/GridCard';
import './Layouts.scss';

const LayoutFour = ({ listings, addToIndex }) => {
  let classnames = ['left', 'right'];
  return (
    <div className="grid layout-four">
      {listings.map((listing, ind) => {
        return (
          <GridCard
            key={listing.title}
            title={listing.title}
            nameOfClass={classnames[ind]}
            index={ind + addToIndex}
            img={listing.mediaurl}
          />
        );
      })}
    </div>
  );
};

export default LayoutFour;
