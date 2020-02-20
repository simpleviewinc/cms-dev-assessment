import React, {Component} from 'react';
import './App.css';
import ListingBox from './Components/listingBox'
import Axios from 'axios'

class App extends Component{

  constructor(props) {
    super(props);
    
    this.state={

      data: []


    }
  }
  
componentDidMount(){
  Axios.get("https://sv-reqres.now.sh/api/listings")
  .then((res)=>{
    let num = 0
    for(let i=0;i<res.data.data.length; i++){
      if(num === 6){num=0}
      res.data.data[i].number = num + 1
      num++
    }
    console.log(res.data.data)
    this.setState({data: res.data.data})
  })
}


  render(){
  return (
    <div className="App">
      <header>Test</header>
      <ListingBox state={this.state} />
    </div>
  );}
}

export default App;
