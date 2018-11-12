import React, { Component } from 'react';
import './App.css';
import TileContainer from './components/tileContainer';
import req from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data:[]
    }
}
  componentDidMount(){
    req.get('https://sv-reqres.now.sh/api/listings/?per_page=9')
        .then(response => {
          let tileContainers = [];
          let resLength = response.data.data.length
          for(let i = 0; i<resLength; i+=3) {
            tileContainers.push(<TileContainer key={`tileConts${i}`} elementData={response.data.data.splice(0, 3)} />)
          }  
          console.log(tileContainers);
          this.setState({data: tileContainers})     
        });
  }
    
  render() {
    return (
     <div className="app-container">
        {this.state.data.map(el => el)}
     </div>
    );
  }
}

export default App;
