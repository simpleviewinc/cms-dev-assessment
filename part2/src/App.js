import React, { Component } from 'react';

import Collection from "./Collection.js";
import OutlinedButtons from "./OutlinedButtons.js";

import './App.css';
import './index.css'


class App extends Component {
  //Add state, so we can change things as needed
  constructor(){
    super()
    this.state = {
      posts: ''
    }
  }


  render() {

    
    //Make a fetch request -- defaults to GET
    let listingsURL = "https://sv-reqres.now.sh/api/listings?per_page=9"
    fetch(listingsURL)
      .then( response => response.json()) //handle the data/response
      .then( returned => this.setState({posts: returned.data}) ) //and do something with it
      .catch( error => console.error('ERROR: ', error));
    


      return (
        <div className="App">
         
          <div class="container">
            <div class="sort-header"><OutlinedButtons /></div>
            
            <Collection posts={this.state.posts}/>
          </div>
        </div>
      );
    }
}

export default App; 