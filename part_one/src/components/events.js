import React, {Component} from 'react';
import axios from 'axios';
import Listing from './listing';

class Events extends Component {
  constructor() {
    super();
    this.state = {
      events: []
    }
  }

  async componentDidMount() {
    await axios
    .get("https://sv-reqres.now.sh/api/events")
    .then(res => this.setState({ events: res.data.data }))
    .catch(err => console.log(err))
  }

  render() {
  return (
    <div>
      <ul>
        {this.state.events.map(event => (
          <Listing listing={event} key={event.recid}/>
        ))}
      </ul>
    </div>
  );
  }
}

export default Events;