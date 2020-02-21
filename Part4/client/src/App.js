import React, {Component} from 'react';
import './App.css';
import ListingBox from './Components/listingBox'
import Axios from 'axios'

class App extends Component{

  constructor(props) {
    super(props);
    
    this.state={

      data: [],
      focused: 'All',
      show: false,
      pagination: 0


    }
  }
  
componentDidMount(){
  this.getAll()
  this.animatedCover()

}

shuffle = (array) => {
  let index = null;
  let array2 = []
  while (array.length !== 0) {
      index = Math.floor(Math.random() * array.length);
      array2.push(array[index])
      array.splice(index, 1)
  }
  return array2;
}

animatedCover = () => {
  setTimeout(()=>this.setState({show: false}), 100)
  setTimeout(()=>this.setState({show: true}), 1200)
}

paginationAdd = () => {
  if(this.state.pagination === 3){
    this.setState({pagination: 0})
  }
  else{
  this.setState({pagination: this.state.pagination + 1})
  }
}

paginationMinus = () => {
  if(this.state.pagination === 0){
    this.setState({pagination: 0})
  }
  else{
    
    this.setState({pagination: this.state.pagination - 1})
    }
  
}

getAll = () => {
  let num = 0
  let data = []
  Axios.get("https://sv-reqres.now.sh/api/listings")
  .then((res)=>{
    data = res.data.data
  })
  .then(
  Axios.get("https://sv-reqres.now.sh/api/events")
  .then((res1)=>{
    data = data.concat(res1.data.data)
  })  
  ).then(
  Axios.get("https://sv-reqres.now.sh/api/offers")
  .then((res2)=>{
    data = data.concat(res2.data.data)
  })
  )
  
  setTimeout(()=>data = this.shuffle(data),500)

  setTimeout(()=>{
    for(let i=0;i<data.length; i++){
      data[i].number = num + 1
      num++
    }
    console.log(data)

    this.setState({data: data})
    if(data.length <= 17){this.getAll()} 
  }, 1000)
  
}

filter = (selected) => {
  if(selected === 'All'){
    this.getAll()
  }
  else {
    Axios.get(`https://sv-reqres.now.sh/api/${selected.toLowerCase()}`)
    .then((res)=>{
      let num = 0
      let data = []
      data = res.data.data

      setTimeout(()=>{
        for(let i=0;i<data.length; i++){
          data[i].number = num + 1
          num++
        }
        this.setState({data: data})
      }, 100)
    
  })  
  }

  this.setState({focused: selected})
}


  render(){
  return (
    <div className="App">
      <ListingBox paginationMinus={this.paginationMinus} paginationAdd={this.paginationAdd} animatedCover={this.animatedCover} filter={this.filter} state={this.state} />
    </div>
  );}
}

export default App;
