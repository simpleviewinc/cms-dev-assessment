import React, { Component } from "react";
import ImageWithFallback from "./image-with-fallback";
import "./photo-grid.css";

export default function PhotoGrid(props) {
  const listingCards = props.listings.map(listing => (
    <div className="grid-child">
      <div className="listing-title">{listing.title}</div>
      <ImageWithFallback src={listing.mediaurl} />
    </div>
  ));
  return <div className={`photo-grid ${props.className}`}>{listingCards}</div>;
}
