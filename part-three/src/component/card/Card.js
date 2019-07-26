import React, { Component } from 'react';
import fallBack from '../../fallback.jpg';

export default class Card extends Component {

  fallBackImage = (e) => {
    e.target.src = fallBack;
  }

  render() {
    const { title, number, mediaurl } = this.props.data;
    const { gridPlacement, animation} = this.props;
    
    return (
      <article className={ `card ${gridPlacement} card-${animation}` }>
        <div>
          <p>{ `0${number}.` }</p>
          <h2>{ title }</h2>
        </div>
        <img src={ mediaurl } onError={ this.fallBackImage } alt={ title } />
      </article>
    );
  }
}