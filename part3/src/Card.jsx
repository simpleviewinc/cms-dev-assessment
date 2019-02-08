import React from 'react'
import './Card.css'
// imports fallback image from src
import fallback from './fallback.jpg'

// takes properties of data array
const Card = ({ title, description, img }) => {
  return (
    <div className="card">
      <span
        className="card-header"
        style={{
          // '$' represents switching from string to JS
          backgroundImage: `url('${img}'), url('${fallback}')`,
        }}
      />
      <h3>{title}</h3>
      <div>
        <p>{description}</p>
        <button type="submit">Read More</button>
      </div>
    </div>
  )
}

export default Card
