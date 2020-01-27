import React from 'react';
import GridCard from './../gridCard/GridCard';
import './Layouts.scss';

const LayoutOne = ({ listings, addToIndex }) => {
  let classnames = [
    'upperleft',
    'bottomleft',
    'topright',
    'middleright',
    'bottomright'
  ];
  return (
    <div className="grid layout-one">
      {listings.map((listings, index) => {
        return (
          <GridCard
            nameOfClass={classnames[index]}
            title={listings.title}
            index={index + addToIndex}
            img={listings.mediaurl}
            key={listings.title}
          />
        );
      })}
    </div>
  );
};

export default LayoutOne;
