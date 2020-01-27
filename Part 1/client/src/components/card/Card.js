import React from 'react';
import image from '../../asssets/fallback.jpg';
import './Card.scss';

const Card = ({ title, description, img, size, orientation }) => {
  // Determines if the card will be horizontal or vertical.
  let cardWidth = size === 'large' ? { width: '50%' } : { width: '25%' };
  let cardClass =
    orientation === 'horizontal' ? 'card horizontal' : 'card vertical';

  const onImageError = e => {
    e.target.src = image;
  };

  return (
    <div className={cardClass} style={cardWidth}>
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
