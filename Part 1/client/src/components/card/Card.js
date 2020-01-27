import React from 'react';
import image from '../../asssets/fallback.jpg';
import './Card.scss';

const Card = ({ title, description, img }) => {
  const onImageError = e => {
    e.target.src = image;
  };
  return (
    <div className="card">
      <div className="card__img-container">
        <img onError={onImageError} src={img} alt={title} />
      </div>
      <div className="card__text-box">
        <h1 className="header-primary">{title}</h1>
        <p className="sub-text">{description}</p>
        <div className="fadeout"></div>
        <button className="card__cta">Read More</button>
      </div>
    </div>
  );
};

export default Card;
