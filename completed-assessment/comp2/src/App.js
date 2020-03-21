import React from 'react';
import './App.css';
import Story from './components/Story';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      stories: [],
      listings: [],
      events: [],
      offers: []
    };
    this.handleUpdate = this.handleUpdate.bind(this);
  }
  
  componentDidMount() {
    // Function to fetch data from API
    const fetchData = async (getData) => {
      let response = await fetch(`https://sv-reqres.now.sh/api/${getData}`);
      let data = await response.json();
      return data;
    }
    // Different urls to fetch
    const urls = [ "listings", "events", "offers"]
    // Map over them and load them to the state
    urls.forEach((url) => {
      fetchData(url).then( data => {
        this.setState((state) => ({
          // append all the urls to stories so that all datas shows initially
          stories: [...state.stories, ...data.data],
          // put them in their own variables individually so we can swap between them
          [url]: data.data
        }))
      })
    })
  }

  handleUpdate(update, e){
    let buttons = document.querySelectorAll('button');
    buttons.forEach( elem => {
      elem.classList.remove("selected");
    })
    console.log(e.target.classList.add("selected"));
    this.setState(state => ({
      stories: update
    }));
  }

  render() {
    const { stories, listings, events, offers } = this.state;
    return(
      <div className="wrapper">
        <nav className="menu">
          <button className="selected"
          onClick={this.handleUpdate.bind(this, [...listings, ...events, ...offers])}>All</button>
          <button onClick={this.handleUpdate.bind(this, listings)}>Listings</button>
          <button onClick={this.handleUpdate.bind(this, events)}>Events</button>
          <button onClick={this.handleUpdate.bind(this, offers)}>Offers</button>
        </nav>
      <div className="grid">
        { stories.map((story, idx) => (
          <Story key={idx} title={story.title} story={story.description} url={story.mediaurl}/>
        )) }
      </div>
    </div>
    )}
}

export default App;
