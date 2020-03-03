import React from 'react'
import '../css/theme.css'

const fallbackImg = require('../assets/comps/fallback.jpg');

class Home extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          allData: {},
          activeFilter: 'all'
      };
    }
  
    componentDidMount() {
        const { allData } = this.state;
        fetch('https://sv-reqres.now.sh/api/listings')
        .then(response => response.json())
        .then(data => {
            allData['listings'] = data;
            this.setState({allData: allData})
        });
        fetch('https://sv-reqres.now.sh/api/events')
        .then(response => response.json())
        .then(data => {
            allData['events'] = data;
            this.setState({allData: allData})
        });
        fetch('https://sv-reqres.now.sh/api/offers')
        .then(response => response.json())
        .then(data => {
            allData['offers'] = data;
            this.setState({allData: allData})
        });
    }

    setFallback(type, index) {
        const { allData } = this.state;
        if ( typeof allData[type] !== 'undefined' ) {
            allData[type].data[index].mediaurl = fallbackImg;
            this.setState({allData: allData});
        }
    }

    updateFilter(key) {
        this.setState({activeFilter: key})
    }
  
    render() {
        const { allData, activeFilter } = this.state;
        var content = [];
        var filteredData;

        /* Map data */
        if ( activeFilter === 'all' ) {
            filteredData = {
                data: []
            };
            if ( allData.hasOwnProperty('listings') && allData.hasOwnProperty('events') && allData.hasOwnProperty('offers') ) {
                allData['listings'].data.map((thisListing, index) => {
                    thisListing.type = 'listings';
                    thisListing.realIndex = index;
                    filteredData.data.push(thisListing)
                }, this)
                allData['events'].data.map((thisEvent, index) => {
                    thisEvent.type = 'events';
                    thisEvent.realIndex = index;
                    filteredData.data.push(thisEvent);
                }, this)
                allData['offers'].data.map((thisOffer, index) => {
                    thisOffer.type = 'offers';
                    thisOffer.realIndex = index;
                    filteredData.data.push(thisOffer);
                }, this)
            }
        } else {

            filteredData = allData[activeFilter];

        }

        if ( filteredData.data.length > 0 ) {
            filteredData.data.sort((a,b) => {
                return b.recid - a.recid;
              });
        }

        

        /* Filters */
        content.push(
            <div className="filters-wrap">
                <button className={activeFilter === 'all' ? 'filter activeFilter' : 'filter'} onClick={() => this.updateFilter('all')}>All</button>
                <button className={activeFilter === 'listings' ? 'filter activeFilter' : 'filter'} onClick={() => this.updateFilter('listings')}>Listings</button>
                <button className={activeFilter === 'events' ? 'filter activeFilter' : 'filter'} onClick={() => this.updateFilter('events')}>Events</button>
                <button className={activeFilter === 'offers' ? 'filter activeFilter' : 'filter'} onClick={() => this.updateFilter('offers')}>Offers</button>
            </div>
        )

        filteredData.data.map((thisItem, index) => {

            if ( index > 0 && index % 5 === 0 ) {

                content.push(
                    <div className="listing-ad small" style={{backgroundImage: `url(${fallbackImg})`}}>
                    </div>
                )
            
            }

                
                content.push(
                    <div className={index === 0 || index % 6 === 0 ? 'listing-block large' : 'listing-block small'}>
                        {typeof thisItem.mediaurl !== 'undefined' && thisItem.mediaurl.length > 0 && 
                            <React.Fragment>
                                <img className="listing-img-test" src={thisItem.mediaurl} onError={() => this.setFallback(thisItem.type, thisItem.realIndex)} />
                                <div className='listing-img' style={{backgroundImage: `url(${thisItem.mediaurl})`}}></div>
                            </React.Fragment>
                        }
                        <h6 className="listing-title">{thisItem.title}</h6>
                        <p className="listing-description">{thisItem.description}</p>
                        <button className="listing-read-more">Read More</button>
                        <div className="fade"></div>
                    </div>
                )       
            
                })

            return content;

    }
  }

  export default Home;