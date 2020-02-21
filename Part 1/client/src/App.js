import React, {Component} from 'react';
import './App.css';
import ListingBox from './Components/listingBox'
import Axios from 'axios'

class App extends Component{

  constructor(props) {
    super(props);
    
    this.state={

      data: [],
      focused: 'All'


    }
  }
  
componentDidMount(){
  this.getAll()
}

getAll = () => {
  let num = 0
  let data = []
  Axios.get("https://sv-reqres.now.sh/api/listings")
  .then((res)=>{
    
    
    data = res.data.data
    
  })
  Axios.get("https://sv-reqres.now.sh/api/events")
  .then((res)=>{
    
    
    data = data.concat(res.data.data)
    
  })  
  Axios.get("https://sv-reqres.now.sh/api/offers")
  .then((res)=>{
    
    
    data = data.concat(res.data.data)
    
  })
  

  setTimeout(()=>{
    for(let i=0;i<data.length; i++){
      if(num === 6){num=0}
      data[i].number = num + 1
      num++
    }
    console.log(data)
    this.setState({data: data})
  }, 100)
}

filter = (selected) => {
  if(selected === 'All'){
    this.getAll()
  }

  this.setState({focused: selected})
}


  render(){
  return (
    <div className="App">
      <ListingBox filter={this.filter} state={this.state} />
    </div>
  );}
}

export default App;
