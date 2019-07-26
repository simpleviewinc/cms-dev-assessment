import React, { Component } from 'react';
import fallBack from '../../fallback.jpg';

export default class Card extends Component {
  
  constructor() {
    super();
    this.state = {
      descriptionView: 'Read More'
    };
  }

  toggleDescriptionView = () => {
    if(this.state.descriptionView === 'Read More') {
      this.setState({
        descriptionView: 'Read Less'
      })
    }else {
      this.setState({
        descriptionView: 'Read More'
      })
    }
  }

  fallBackImage = (e) => {
    e.target.src = fallBack;
  }

  render() {
    const { description, mediaurl, title } = this.props.data;
    const { descriptionView } = this.state;
    const cssStyle = descriptionView.split(" ")[1]
    return (
      <article className='card'>
        <img src={ mediaurl } onError={ this.fallBackImage } alt={ title }/>
        <div className={cssStyle}>
          <h2>{ title }</h2>
          <p>{ description }</p>
          <button onClick={ this.toggleDescriptionView }>{ descriptionView }</button>
        </div>
      </article>
    );
  }
}