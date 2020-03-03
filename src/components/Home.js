import React from 'react'
import theme from '../css/theme.css'

const fallbackImg = require('../assets/comps/fallback.jpg');

class Home extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          listings: {}
      };
    }
  
    componentDidMount() {
        fetch('https://sv-reqres.now.sh/api/listings')
        .then(response => response.json())
        .then(data => this.setState({listings: data}));
    }

    setFallback(index) {
        const { listings } = this.state;
        listings.data[index].mediaurl = fallbackImg;
        this.setState({listings: listings});
    }
  
    render() {
        const { listings } = this.state;
        var content = [];

        typeof listings !== 'undefined' && typeof listings.data !== 'undefined' && listings.data.map((thisListing, index) => {

            if ( index === 5 ) {

                content.push(
                    <div className="listing-ad small" style={{backgroundImage: `url(${fallbackImg})`}}>
                    </div>
                )
            
            }

                
                content.push(
                    <div className={index === 0 ? 'listing-block large' : 'listing-block small'}>
                        {thisListing.mediaurl.length > 0 && 
                            <React.Fragment>
                                <img className="listing-img-test" src={thisListing.mediaurl} onError={() => this.setFallback(index)} />
                                <div className='listing-img' style={{backgroundImage: `url(${thisListing.mediaurl})`}}></div>
                            </React.Fragment>
                        }
                        <h6 className="listing-title">{thisListing.title}</h6>
                        <p className="listing-description">{thisListing.description}</p>
                        <button className="listing-read-more">Read More</button>
                        <div className="fade"></div>
                    </div>
                )       
            
                })

            return content;

    }
  }

  export default Home;