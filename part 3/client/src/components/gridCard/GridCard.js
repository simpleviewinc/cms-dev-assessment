import React from 'react';
import image from '../../assets/fallback.jpg';
import './GridCard.scss';

const GridCard = ({ nameOfClass, title, img, index }) => {
  let numLength = index.toString().length;
  const handleImageError = e => {
    e.target.src = image;
  };

  return (
    <div className={`${nameOfClass} card`}>
      <div className="text-container">
        <span className="number">{numLength > 1 ? index : `0${index}`}.</span>
        <h1 className="header-primary">{title}</h1>
      </div>
      <img onError={handleImageError} src={img} alt="" />
    </div>
  );
};

export default GridCard;
