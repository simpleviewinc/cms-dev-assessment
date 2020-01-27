import React from 'react';
import Card from './components/card/Card';

export const mapDataToCards = listings => {
  // Transforms data into Card component with appropriate props.
  let count = 0;
  let cards = listings.map((listing, ind) => {
    // Only the first and last cards are large, and the last card is displayed horizontally
    let card = (
      <Card
        key={ind}
        size={count === 0 || count === 5 ? 'large' : null}
        description={listing.description}
        title={listing.title}
        img={listing.mediaurl}
        orientation={count === 5 ? 'horizontal' : null}
      />
    );

    count++;
    if (count % 6 === 0) count = 0;
    return card;
  });

  // break up amount of cards into each
  cards = groupArr(cards, 3);
  return cards;
};

export const groupArr = (data, n) => {
  // Group elements in an array into subarrays by amount specified
  var group = [];
  for (var i = 0, j = 0; i < data.length; i++) {
    if (i >= n && i % n === 0) j++;
    group[j] = group[j] || [];
    group[j].push(data[i]);
  }
  return group;
};
