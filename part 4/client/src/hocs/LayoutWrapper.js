import React from 'react';
import LayoutOne from './../components/layouts/LayoutOne';
import LayoutTwo from '../components/layouts/LayoutTwo';
import LayoutThree from './../components/layouts/LayoutThree';
import LayoutFour from './../components/layouts/LayoutFour';

const LayoutWrapper = ({ listings, currentLayout }) => {
  let layouts = [
    <LayoutOne listings={listings.slice(0, 5)} addToIndex={1} />,
    <LayoutTwo listings={listings.slice(5, 10)} addToIndex={6} />,
    <LayoutThree listings={listings.slice(10, 13)} addToIndex={11} />,
    <LayoutFour listings={listings.slice(13, 15)} addToIndex={14} />
  ];
  return layouts[currentLayout];
};

export default LayoutWrapper;
