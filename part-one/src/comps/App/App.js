import React, { Component } from 'react'
import Navigation from '../Navigation/Navigation'
import Listings from '../../tabs/Listings/Listings'
import config from '../../config'
import './App.css'

export default class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            listings: [],
            events: [],
            offers: [],          
        }
    }

    componentDidMount() {         
        Promise.all([
            fetch(`${config.API_ENDPOINT}/listings`),
            fetch(`${config.API_ENDPOINT}/events`),
            fetch(`${config.API_ENDPOINT}/offers`)
        ])
        .then( ([listingsRes, eventsRes, offersRes]) => {
            if (!listingsRes.ok) 
                return listingsRes.json()
                    .then( e => Promise.reject(e))

            if (!eventsRes.ok) 
                return eventsRes.json()
                    .then(e => Promise.reject(e))

            if (!offersRes.ok) 
                return offersRes.json()
                    .then(e => Promise.reject(e))

            return Promise.all([ listingsRes.json(), eventsRes.json(), offersRes.json() ])
        })
        .then(([listings, events, offers]) => { this.setState({listings, events, offers}) })        
        .catch(error => { console.error({error}) }) 
    }

    render(){              
        return(
            <div>                               
                <header>
                    <Navigation />           
                </header>
                <main>                
                    <Listings                 
                        listings={this.state.listings} />                    
                </main>         
            </div>
        )
    }
}