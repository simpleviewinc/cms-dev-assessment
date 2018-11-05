import React from 'react';

const Card = ({ id, title, body }) => {
  return (
    <div className="col-lg-3 col-md-4 mt-3 article">
     	<img className="w-100 h-50" alt='article' src={`https://via.placeholder.com/500`} />
     	<div className="h-50 article-content">
	        <h5 className="article-title mt-3">{title}</h5>
	        <p className="article-body">{body}</p>
        </div>
        <div className="overlay" />
    </div>
  );
}

export default Card;
