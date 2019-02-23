import React, { Fragment } from "react";

const Listings = props => {
  console.log(props.context.listingsInfo.listings.data);
  return (
    <div>
      {props.context.listingsInfo.listings.data ?(
        <>
          {props.context.listingsInfo.listings.data.map(item => (
            <div>{item.title}</div>
          ))}
        </>
      ) : <div>hi</div>}
    </div>
  );
};
export default Listings;
