import React from "react"
import './Navigation.css'

export default class Navigation extends React.Component{

    handleAll = () => {
        this.props.handleAll()
    }
    
    handleListings = () => {
        this.props.handleListings()
    }
    
    handleEvents = () => {
        this.props.handleEvents()
    }

    handleOffers = () => {
        this.props.handleOffers()
    }

    render(){
        return(
            <nav>                
                <button 
                    onClick={this.handleAll}
                    className='nav-button'>
                        All
                </button>
                
                <button 
                    onClick={this.handleListings}
                    className='nav-button'>
                        Listings
                </button>
                
                <button 
                    onClick={this.handleEvents}
                    className='nav-button'>
                        Events
                </button>

                <button 
                    onClick={this.handleOffers}
                    className='nav-button'>
                        Offers                
                </button>                
            </nav> 
        )
    }
}