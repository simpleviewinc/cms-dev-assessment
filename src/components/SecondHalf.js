import React from 'react'
import '../css/threeFour.css'

const fallbackImg = require('../assets/comps/fallback.jpg');

class SecondHalf extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        allData: [],
        activePage: 1
      };
    }
  
    componentDidMount() {
        this.getAll();
    }

    getAll() {
        fetch('https://sv-reqres.now.sh/api/listings?page=1&per_page=-1')
        .then(response => response.json())
        .then(data => {
            const { allData } = this.state;
            let thisAllData = allData;
            data.data.map((listing) => {
                thisAllData.push(listing);
            }, this)
            this.setState({allData: thisAllData})
        });
        fetch('https://sv-reqres.now.sh/api/events?page=1&per_page=-1')
        .then(response => response.json())
        .then(data => {
            const { allData } = this.state;
            let thisAllData = allData;
            data.data.map((event) => {
                thisAllData.push(event);
            }, this)
            this.setState({allData: thisAllData})
        });
        fetch('https://sv-reqres.now.sh/api/offers?page=1&per_page=-1')
        .then(response => response.json())
        .then(data => {
            const { allData } = this.state;
            let thisAllData = allData;
            data.data.map((offer) => {
                thisAllData.push(offer);
            }, this)
            
            this.setState({allData: thisAllData})
        });
    }

    setFallback(index) {
        const { allData } = this.state;
        allData[index].mediaurl = fallbackImg;
        this.setState({allData: allData});
    }

    shuffleArray() {
        const { allData } = this.state;
        var thisAllData = allData;
        for (var i = thisAllData.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = thisAllData[i];
            thisAllData[i] = thisAllData[j];
            thisAllData[j] = temp;
        }
        this.setState({allData: thisAllData});
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
        this.shuffleArray()
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
        this.shuffleArray()
    }
  
    render() {
        const { allData, activePage } = this.state;
        var left = [];
        var right = [];
        var center = [];

        if ( activePage === 1 ) {

                typeof allData !== 'undefined' && allData.map((thisItem, index) => {

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

            typeof allData !== 'undefined' && allData.map((thisItem, index) => {
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

        typeof allData !== 'undefined' && allData.map((thisItem, index) => {
            
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

    typeof allData !== 'undefined' && allData.map((thisItem, index) => {
        
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