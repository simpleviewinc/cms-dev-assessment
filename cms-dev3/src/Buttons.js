import React, { Component } from 'react';
import back from './Utils/back.svg'
import forward from './Utils/next.svg'
import './Buttons.css'

export class Buttons extends Component {

  render () {
    return (
      <div className='buttons'>
        <button><img className='arrow' alt='back arrow' src={back} />Prev</button>
        <button>Next<img className='arrow' alt='next arrow' src={forward} /></button>
      </div>
    )
  }
}

export default Buttons;