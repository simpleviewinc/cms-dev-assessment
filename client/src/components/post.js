import React, {Component} from 'react';

class Post extends Component {
    constructor(props) {
        super(props);

    }

  render() {
    console.log(this.props)
  return (
    <div>
      <img src={this.props.listing.mediaurl} alt="Property Image" /> 
      {this.props.listing.title}
      {this.props.listing.description}
    </div>
  );
  }
}

export default Post;