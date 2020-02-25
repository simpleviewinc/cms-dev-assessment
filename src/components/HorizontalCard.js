import React, {Component} from 'react';

class HorizontalCard extends Component {
  constructor(props) {
      super(props);
      this.state = {
          hover: false
      }
  }

  handleMouseIn = (e) => {
      this.setState({
          hover: true
      })
  }

  handleMouseOut = (e) => {
      this.setState({
          hover: false
      })
  }

  render() {
    let { image, title, body } = this.props;
    let { hover } = this.state;
    return (
      <div className="col-lg-6 col-md-4 mt-3 article" onMouseEnter={this.handleMouseIn} onMouseLeave={this.handleMouseOut}>
       	<img className="w-100 h-50" alt='article' src={image} onError={(e)=>{e.target.onerror = null; e.target.src="assets/fallback.jpg"}}/>
       	<div className="h-50 article-content">
  	        <h5 className="article-title mt-3">{title}</h5>
  	        <p className="article-body">{body}</p>
          </div>
          <div className="overlay" />
          {hover ? 
          (
          <div className="article-button">
              <a type='button' className='btn btn-danger' href={"#"}>Read More</a>
          </div>
          ) : ''}
      </div>
    );
  }
}

export default HorizontalCard;