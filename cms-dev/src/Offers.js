import React, { Component } from 'react';
import './Offers.css'

export class Offers extends Component {
  constructor(props) {
    super(props)
  }

  addFallback(ev){
    ev.target.src = 'https://github.com/simpleviewinc/cms-dev-assessment/blob/master/comps/fallback.jpg?raw=true'
  }

  render () {
    const offerTitle = this.props.offers.map(offer => {
      return offer.title
    })

    const offerImg = this.props.offers.map(offer => {
      return offer.mediaurl
    })

    const offerDescript = this.props.offers.map(offer => {
      return offer.description
    })

    return (
      <div className='offers'>
        <div className='offer1'>
          <img className='media1' src={offerImg[0]} alt='offer' onError={this.addFallback} />
          <h2>{offerTitle[0]}</h2>
          <p>{offerDescript[0]}</p>
        </div>
        <div className='offer2'>
          <img className='media' src={offerImg[1]} alt='offer' onError={this.addFallback} />
          <h2>{offerTitle[1]}</h2>
          <p>{offerDescript[1]}</p>
        </div>
        <div className='offer3'>
          <img className='media' src={offerImg[2]} alt='offer' onError={this.addFallback} />
          <h2>{offerTitle[2]}</h2>
          <p>{offerDescript[2]}</p>
        </div>
        <div className='offer4'>
          <img className='media' src={offerImg[3]} alt='offer' onError={this.addFallback} />
          <h2>{offerTitle[3]}</h2>
          <p>{offerDescript[3]}</p>
        </div>
        <div className='offer5'>
          <img className='media' src={offerImg[4]} alt='offer' onError={this.addFallback} />
          <h2>{offerTitle[4]}</h2>
          <p>{offerDescript[4]}</p>
        </div>
        <div className='offer6'>
          <img className='media6' src={offerImg[5]} alt='offer' onError={this.addFallback} />
          <h2>{offerTitle[5]}</h2>
          <p>{offerDescript[5]}</p>
        </div>
      </div>
    )
  }
}

export default Offers;