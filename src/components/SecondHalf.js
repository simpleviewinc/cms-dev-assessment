import React from 'react'
import '../css/threeFour.css'

const fallbackImg = require('../assets/comps/fallback.jpg');

class SecondHalf extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          listings: [],
          activePage: 1
      };
    }
  
    componentDidMount() {
        this.getListings();
    }

    getListings(pageIndex = 1) {
        var perPage;
        if ( pageIndex === 1 ) {
            perPage = 5;
        } else if ( pageIndex === 2 ) {
            perPage = 5;
        } else if ( pageIndex === 3 ) {
            perPage = 3;
        } else if ( pageIndex === 4 ) {
            perPage = 2;
        }
        fetch('https://sv-reqres.now.sh/api/listings?page=' + pageIndex + '&per_page=' + perPage)
        .then(response => response.json())
        .then(data => {
            this.setState({listings: data})
        });
    }

    setFallback(index) {
        const { listings } = this.state;
        listings.data[index].mediaurl = fallbackImg;
        this.setState({listings: listings});
    }

    onNext() {
        const { activePage } = this.state;
        var thisActivePage = activePage
        if ( activePage === 4 ) {
            thisActivePage = 1;
        } else {
            thisActivePage++;
        }
        this.setState({activePage: thisActivePage})
        this.getListings(thisActivePage)
    }

    onPrev() {
        const { activePage } = this.state;
        var thisActivePage = activePage
        if ( activePage === 1 ) {
            thisActivePage = 4;
        } else {
            thisActivePage--;
        }
        this.setState({activePage: thisActivePage})
        this.getListings(thisActivePage)
    }
  
    render() {
        const { listings, activePage } = this.state;
        var left = [];
        var center = [];
        var right = [];

        if ( activePage === 1 ) {

                typeof listings !== 'undefined' && typeof listings.data !== 'undefined' && listings.data.map((thisItem, index) => {

                    if ( index < 2 ) {
                    
                        left.push(
                    
                            <div className="featured-block featured-one-left">
                                <div className="overlay-title">{thisItem.title}</div>
                                {typeof thisItem.mediaurl !== 'undefined' && thisItem.mediaurl.length > 0 && 
                                    <React.Fragment>
                                        <img className="listing-img-test" src={thisItem.mediaurl} onError={() => this.setFallback(index)} />
                                        <div className='featured-img' style={{backgroundImage: `url(${thisItem.mediaurl})`}}></div>
                                    </React.Fragment>
                                }
                            </div>    
                        )

                    } else {

                        right.push(
                    
                            <div className="featured-block featured-one-right">
                                <div className="overlay-title">{thisItem.title}</div>
                                {typeof thisItem.mediaurl !== 'undefined' && thisItem.mediaurl.length > 0 && 
                                    <React.Fragment>
                                        <img className="listing-img-test" src={thisItem.mediaurl} onError={() => this.setFallback(index)} />
                                        <div className='featured-img' style={{backgroundImage: `url(${thisItem.mediaurl})`}}></div>
                                    </React.Fragment>
                                }
                            </div>    
                        )

                    }

            });

        } else if ( activePage === 2 ) {

            typeof listings !== 'undefined' && typeof listings.data !== 'undefined' && listings.data.map((thisItem, index) => {
                console.log(thisItem.mediaurl)
                if ( index < 2 ) {
                    
                    left.push(
                
                        <div className="featured-block featured-two-left">
                            <div className="overlay-title">{thisItem.title}</div>
                            {typeof thisItem.mediaurl !== 'undefined' && thisItem.mediaurl.length > 0 && 
                                <React.Fragment>
                                    <img className="listing-img-test" src={thisItem.mediaurl} onError={() => this.setFallback(index)} />
                                    <div className='featured-img' style={{backgroundImage: `url(${thisItem.mediaurl})`}}></div>
                                </React.Fragment>
                            }
                        </div>    
                    )

                } else if ( index > 2 && index < 5 ) {
                    
                    center.push(
                
                        <div className="featured-block featured-two-center">
                            <div className="overlay-title">{thisItem.title}</div>
                            {typeof thisItem.mediaurl !== 'undefined' && thisItem.mediaurl.length > 0 && 
                                <React.Fragment>
                                    <img className="listing-img-test" src={thisItem.mediaurl} onError={() => this.setFallback(index)} />
                                    <div className='featured-img' style={{backgroundImage: `url(${thisItem.mediaurl})`}}></div>
                                </React.Fragment>
                            }
                        </div>    
                    )

                } else {

                    right.push(
                
                        <div className="featured-block featured-two-right">
                            <div className="overlay-title">{thisItem.title}</div>
                            {typeof thisItem.mediaurl !== 'undefined' && thisItem.mediaurl.length > 0 && 
                                <React.Fragment>
                                    <img className="listing-img-test" src={thisItem.mediaurl} onError={() => this.setFallback(index)} />
                                    <div className='featured-img' style={{backgroundImage: `url(${thisItem.mediaurl})`}}></div>
                                </React.Fragment>
                            }
                        </div>    
                    )

                }

        });

    } else if ( activePage === 3 ) {

        typeof listings !== 'undefined' && typeof listings.data !== 'undefined' && listings.data.map((thisItem, index) => {
            
            if ( index < 2 ) {
                    
                left.push(
            
                    <div className="featured-block featured-three-left">
                        <div className="overlay-title">{thisItem.title}</div>
                        {typeof thisItem.mediaurl !== 'undefined' && thisItem.mediaurl.length > 0 && 
                            <React.Fragment>
                                <img className="listing-img-test" src={thisItem.mediaurl} onError={() => this.setFallback(index)} />
                                <div className='featured-img' style={{backgroundImage: `url(${thisItem.mediaurl})`}}></div>
                            </React.Fragment>
                        }
                    </div>    
                )

            } else {

                right.push(
            
                    <div className="featured-block featured-three-right">
                        <div className="overlay-title">{thisItem.title}</div>
                        {typeof thisItem.mediaurl !== 'undefined' && thisItem.mediaurl.length > 0 && 
                            <React.Fragment>
                                <img className="listing-img-test" src={thisItem.mediaurl} onError={() => this.setFallback(index)} />
                                <div className='featured-img' style={{backgroundImage: `url(${thisItem.mediaurl})`}}></div>
                            </React.Fragment>
                        }
                    </div>    
                )

            }

    });

} else if ( activePage === 4 ) {

    typeof listings !== 'undefined' && typeof listings.data !== 'undefined' && listings.data.map((thisItem, index) => {
        
        if ( index === 0 ) {
                    
            left.push(
        
                <div className="featured-block featured-four-left">
                    <div className="overlay-title">{thisItem.title}</div>
                    {typeof thisItem.mediaurl !== 'undefined' && thisItem.mediaurl.length > 0 && 
                        <React.Fragment>
                            <img className="listing-img-test" src={thisItem.mediaurl} onError={() => this.setFallback(index)} />
                            <div className='featured-img' style={{backgroundImage: `url(${thisItem.mediaurl})`}}></div>
                        </React.Fragment>
                    }
                </div>    
            )

        } else {

            right.push(
        
                <div className="featured-block featured-four-right">
                    <div className="overlay-title">{thisItem.title}</div>
                    {typeof thisItem.mediaurl !== 'undefined' && thisItem.mediaurl.length > 0 && 
                        <React.Fragment>
                            <img className="listing-img-test" src={thisItem.mediaurl} onError={() => this.setFallback(index)} />
                            <div className='featured-img' style={{backgroundImage: `url(${thisItem.mediaurl})`}}></div>
                        </React.Fragment>
                    }
                </div>    
            )

        }

});

}

    return (
        <div className="threeFour">
            <div className="featured-wrap">
                <div className={activePage !== 2 ? 'left-two' : 'left-three'}>{left}</div>
                {activePage === 2 && 
                    <div className="center">{center}</div>
                }
                <div className={activePage !== 2 ? 'right-two' : 'right-three'}>{right}</div>
            </div>
            <div className="pagination">
                <div className="prevNext" onClick={() => this.onPrev()}>Prev</div><div className="prevNext" onClick={() => this.onNext()}>Next</div>
            </div>
        </div>
    )

  }

}

  export default SecondHalf;