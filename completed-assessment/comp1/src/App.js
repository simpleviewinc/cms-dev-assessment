import React from 'react';
import './App.css';
import Story from './components/Story';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      stories: []
    };
  }

  componentDidMount() {
    const fetchStories = async () => {
      let response = await fetch("https://sv-reqres.now.sh/api/listings");
      let data = await response.json();
      return data;
    }
     fetchStories().then( data => {
       console.log(data.data);
       this.setState({
         isLoaded: true,
         stories: data.data
       })
     })
  }

  render() {
    const { stories } = this.state;
    return(
    <div className="wrapper">
      {stories.map((story, idx) => (
        <Story key={idx} title={story.title} story={story.description} url={story.mediaurl}/>
      ))}
    </div>
    )}
}

export default App;
