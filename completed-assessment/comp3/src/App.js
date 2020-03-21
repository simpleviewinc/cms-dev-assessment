import React from 'react';
import './App.css';
import Story from './components/Story';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      stories: [],
      currentItemIdx: 1,
      currentLayout: 1,
      totalStories: 16,
      layouts: {
        1 : 5,
        2 : 5,
        3 : 3,
        4 : 2,
      }
    };
  }
  
  componentDidMount() {
    // Different urls to fetch
    const urls = [ "listings"]

    // Function to fetch data from API
    const fetchData = async (getData) => {
      let response = await fetch(`https://sv-reqres.now.sh/api/${getData}/?per_page=${this.state.totalStories}`);
      let data = await response.json();
      return data;
    }

    // Iterate over them and load them to the state
    urls.forEach((url) => {
      fetchData(url).then( data => {
        console.log(data.data);
        this.setState(state => ({
          // append all the urls to stories so that all datas shows initially
          stories: [...state.stories, ...data.data],
          // put them in their own variables individually so we can swap between them
          [url]: data.data
        }))
      })
    })
  }

  handleStoriesNext(e){
    e.preventDefault();
    const { currentLayout, layouts } = this.state
    // go to the next layout
    if (currentLayout === Object.keys(layouts).length){
      this.setState({
        currentItemIdx: 1,
        currentLayout: 1
      })
    } else {
      this.setState(state => ({
        currentItemIdx: state.currentItemIdx + state.layouts[state.currentLayout],
        currentLayout: state.currentLayout + 1
      }));
    }
  }
  handleStoriesPrev(e){
    e.preventDefault();
    const { currentLayout } = this.state
    // go to the prev layout
    if (currentLayout === 1){
      this.setState(state => ({
        currentItemIdx: state.totalStories - state.layouts[4],
        currentLayout: 4
      }))
    } else {
      this.setState(state => ({
        currentItemIdx: state.currentItemIdx - state.layouts[state.currentLayout - 1],
        currentLayout: state.currentLayout - 1
      }));
    }
  }


  render() {
    const { stories, currentItemIdx, currentLayout, layouts } = this.state;
    let nidx = currentItemIdx - 1;
    return(
      <div className="wrapper">
        <div className={`grid layout${currentLayout}`}>
          { stories.filter((elem, idx) => idx >= currentItemIdx && idx < currentItemIdx + layouts[currentLayout] )
            .map((story, idx) => {
              const output = <Story key={idx} title={story.title} story={story.description} url={story.mediaurl} idx={nidx}/>
              nidx = nidx + 1
              return output;
            })}
        </div>
        <nav>
          <div className="controls">
            <a href="prev" onClick={this.handleStoriesPrev.bind(this)}>Prev.</a>
            <a href="next" onClick={this.handleStoriesNext.bind(this)}>Next</a>
          </div>
        </nav>
    </div>
    )}
}

export default App;
