import React, { Component } from 'react'
import './Events.css'

export class Events extends Component {
  constructor(props) {
    super(props)
  }

  addFallback(ev){
    ev.target.src = 'https://github.com/simpleviewinc/cms-dev-assessment/blob/master/comps/fallback.jpg?raw=true'
  }

  render () {
    const eventTitle = this.props.events.map(event => {
      return event.title
    })

    const eventImg = this.props.events.map(event => {
      return event.mediaurl
    })

    const eventDescript = this.props.events.map(event => {
      return event.description
    })

    return (
      <div className='events'>
        <div className='event1'>
          <img className='media1' src={eventImg[0]} alt='event' onError={this.addFallback} />
          <h2>{eventTitle[0]}</h2>
          <p>{eventDescript[0]}</p>
        </div>
        <div className='event2'>
          <img className='media' src={eventImg[1]} alt='event' onError={this.addFallback} />
          <h2>{eventTitle[1]}</h2>
          <p>{eventDescript[1]}</p>
        </div>
        <div className='event3'>
          <img className='media' src={eventImg[2]} alt='event' onError={this.addFallback} />
          <h2>{eventTitle[2]}</h2>
          <p>{eventDescript[2]}</p>
        </div>
        <div className='event4'>
          <img className='media' src={eventImg[3]} alt='event' onError={this.addFallback} />
          <h2>{eventTitle[3]}</h2>
          <p>{eventDescript[3]}</p>
        </div>
        <div className='event5'>
          <img className='media' src={eventImg[4]} alt='event' onError={this.addFallback} />
          <h2>{eventTitle[4]}</h2>
          <p>{eventDescript[4]}</p>
        </div>
        <div className='event6'>
          <img className='media6' src={eventImg[5]} alt='event' onError={this.addFallback} />
          <h2>{eventTitle[5]}</h2>
          <p>{eventDescript[5]}</p>
        </div>
      </div>
    )
  }
}

export default Events;