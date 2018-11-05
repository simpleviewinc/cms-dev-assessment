import React from 'react';

const VerticalCard = ({ image, title, body }) => {
  return (
    <div className="col-lg-6 col-md-4 mt-3 article">
    	<div className="row h-100">
    		<div className="col-lg-6 col-md-12 vertical-card">
    			<img className="w-100 h-100" alt='article' src={image} onError={(e)=>{e.target.onerror = null; e.target.src="assets/fallback.jpg"}}/>
    		</div>
    		<div className="col-lg-6 col-md-12 vertical-card">
    			<div className="h-100 article-content">
		        <h5 className="article-title mt-3">{title}</h5>
		        <p className="article-body">{body}</p>
	        </div>
	        <div className="overlay" />
    		</div>
    	</div>
    </div>
  );
}

export default VerticalCard;
