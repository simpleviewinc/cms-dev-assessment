import React, { Component } from 'react';
import './Listings.css'

export class Listings extends Component {
  constructor(props) {
    super(props)
  }
  
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

    const listDescript = this.props.listings.map(listing => {
      return listing.description
    })

    return (
      <div className='listings'>
        <div className='listing1'>
          <img className='media1' src={listImg[0]} alt='listing' onError={this.addFallback}/>
          <h2>{listTitle[0]}</h2>
          <p>{listDescript[0]}</p>
        </div>
        <div className='listing2'>
          <img className='media' src={listImg[1]} alt='listing' onError={this.addFallback}/>
          <h2>{listTitle[1]}</h2>
         <p>{listDescript[1]}</p>
        </div>
        <div className='listing3'>
          <img className='media' src={listImg[2]} alt='listing' onError={this.addFallback}/>
          <h2>{listTitle[2]}</h2>
          <p>{listDescript[2]}</p>
        </div>
        <div className='listing4'>
          <img className='media' src={listImg[3]} alt='listing' onError={this.addFallback}/>
          <h2>{listTitle[3]}</h2>
          <p>{listDescript[3]}</p>
        </div>
        <div className='listing5'>
          <img className='media' src={listImg[4]} alt='listing' onError={this.addFallback}/>
          <h2>{listTitle[4]}</h2>
          <p>{listDescript[4]}</p>
        </div>
        <div className='listing6'>
          <img className='media6' src={listImg[5]} alt='listing' onError={this.addFallback}/>
          <h2 className='h6'>{listTitle[5]}</h2>
          <p className='p6'>{listDescript[5]}</p>
       </div>
      </div>
    )
  }
}

export default Listings;