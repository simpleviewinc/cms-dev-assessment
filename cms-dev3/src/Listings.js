import React, { Component } from 'react';
import './Listings.css'

export class Listings extends Component {
  
  addFallback(ev){
    ev.target.src = 'https://github.com/simpleviewinc/cms-dev-assessment/blob/master/comps/fallback.jpg?raw=true'
  }

  render () {
    const listTitle = this.props.listings.map(listing => {
      return listing.title
    })

    const listImg = this.props.listings.map(listing => {
      return listing.mediaurl
    })

    return (
      <div className='listings'>
        <div className='listingsLeft'>
        <div className='listing1'>
          <h2>01.{listTitle[0]}</h2>
          <img className='media1' src={listImg[0]} alt='listing' onError={this.addFallback}/>
        </div>
        <div className='listing2'>
          <h2>02.{listTitle[1]}</h2>
          <img className='media1' src={listImg[1]} alt='listing' onError={this.addFallback}/>
        </div>
        </div>
        <div className='listingsRight'>
        <div className='listing3'>
          <h2>03.{listTitle[2]}</h2>
          <img className='media2' src={listImg[2]} alt='listing' onError={this.addFallback}/>
        </div>
        <div className='listing4'>
          <h2>04.{listTitle[3]}</h2>
          <img className='media2' src={listImg[3]} alt='listing' onError={this.addFallback}/>
        </div>
        <div className='listing5'>
          <h2>05.{listTitle[4]}</h2>
          <img className='media2' src={listImg[4]} alt='listing' onError={this.addFallback}/>
        </div>
        </div>
      </div>
    )
  }
}

export default Listings;