import React, { Component } from "react";
import EventComponent from "./EventComponent";

class Events extends Component {
  state = {
    loading: false,
    events: []
  };

  componentDidMount() {
    this.setState({ loading: true });
    fetch("https://sv-reqres.now.sh/api/events")
      .then(response => response.json())
      .then(data => {
        this.setState({ events: data.data, loading: false });
      });
  }

  render() {
    const loading_text = 'The "events" api is loading';

    const events = this.state.events.map(event => {
      let indexValue = this.state.events.indexOf(event);
      let event_class_name = "data-components-container ";

      event_class_name +=
        indexValue === 0 || indexValue % 5 === 0 ? "double" : "single";

      return (
        <div key={indexValue} className={event_class_name}>
          <EventComponent article={event} />
        </div>
      );
    });

    return (
      <main className="container">
        <div className="row">{this.state.loading ? loading_text : events}</div>
      </main>
    );
  }
}

export default Events;
