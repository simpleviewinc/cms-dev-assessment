import React from 'react'
import '../../ui/tabs.css'
import fallback from '../../ui/fallback.jpg'

export default class Listings extends React.Component{                
        constructor(props){
                super(props);                
                this.state = { error: false };        
        }
        
        handleImageError() {
                this.setState({ error: true });
        }
                
        handleMouseEnter(){
                
        }

        render(){                
                if (this.props.listings.data === undefined){
                        return null
                }        
                return(
                        <div className='card-wrapper'>                        
                                {this.props.listings.data.map(listing => 
                                        <div className='card' 
                                                key={listing.recid}>                                                
                                                        <img className='card-img' 
                                                                src={this.state.error ? fallback : listing.mediaurl}
                                                                alt='Simpleview' 
                                                                onError={this.handleImageError.bind(this)}
                                                        />
                                                        <div className='card-content-wrapper'>
                                                                <h3 className='card-heading'>{listing.title}</h3>
                                                                <div className='card-description'>
                                                                        <p className='card-description-p'>                                                                                
                                                                                {listing.description}</p>
                                                                </div>                                                        
                                                        </div>                                                        
                                        </div>
                                )}
                        </div>
                )                        
        }
}