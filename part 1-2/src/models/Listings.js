import React, {Component} from 'react';
import '../assets/css/Listings.css';

export class Listings extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props)
    }
    ifNA(a){
        a.target.src = 'https://github.com/simpleviewinc/cms-dev-assessment/blob/master/comps/fallback.jpg'
    }

    // repeat(){
    //     let list = [];
    //     for(let i = 0; i < this.props.listings.length; i++){
    //         list.push(
    //             `<div className='listing${i}'>
    //             <img className='image${i}' src={listingImage${i} alt='listing' onError={this.ifNA}/>
    //             <h5>{listingTitle${i}}</h5>
    //             <p>{listingDescription${i}}</p>
    //             </div>`
    //         )
    //     }
    //     return list;
    // }

    render(){
        const listingTitle = this.props.listings.map(listing => {
            return listing.title
        })

        const listingImage = this.props.listings.map(listing => {
            return listing.mediaurl
        })

        const listingDescription = this.props.listings.map(listing => {
            return listing.description
        })

        return (
            <div className='listings'>
                <div className='listing0'>
                    <img className='image0' src={listingImage[0]} alt='listing' onError={this.ifNA}/>
                    <h5>{listingTitle[0]}</h5>
                    <p>{listingDescription[0]}</p>
                </div>
                <div className='listing1'>
                    <img className='image1' src={listingImage[1]} alt='listing' onError={this.ifNA}/>
                    <h5>{listingTitle[1]}</h5>
                    <p>{listingDescription[1]}</p>
                </div>
                <div className='listing2'>
                    <img className='image2' src={listingImage[2]} alt='listing' onError={this.ifNA}/>
                    <h5>{listingTitle[2]}</h5>
                    <p>{listingDescription[2]}</p>
                </div>
                <div className='listing3'>
                    <img className='image3' src={listingImage[3]} alt='listing' onError={this.ifNA}/>
                    <h5>{listingTitle[3]}</h5>
                    <p>{listingDescription[3]}</p>
                </div>
                <div className='listing4'>
                    <img className='image4' src={listingImage[4]} alt='listing' onError={this.ifNA}/>
                    <h5>{listingTitle[4]}</h5>
                    <p>{listingDescription[4]}</p>
                </div>
                <div className='listing5'>
                    <img className='image5' src={listingImage[5]} alt='listing' onError={this.ifNA}/>
                    <h5>{listingTitle[5]}</h5>
                    <p>{listingDescription[5]}</p>
                </div>
                <div className='listing0'>
                    <img className='image0' src={listingImage[6]} alt='listing' onError={this.ifNA}/>
                    <h5>{listingTitle[6]}</h5>
                    <p>{listingDescription[6]}</p>
                </div>
                <div className='listing1'>
                    <img className='image1' src={listingImage[7]} alt='listing' onError={this.ifNA}/>
                    <h5>{listingTitle[7]}</h5>
                    <p>{listingDescription[7]}</p>
                </div>
                <div className='listing2'>
                    <img className='image2' src={listingImage[8]} alt='listing' onError={this.ifNA}/>
                    <h5>{listingTitle[8]}</h5>
                    <p>{listingDescription[8]}</p>
                </div>
                <div className='listing3'>
                    <img className='image3' src={listingImage[9]} alt='listing' onError={this.ifNA}/>
                    <h5>{listingTitle[9]}</h5>
                    <p>{listingDescription[9]}</p>
                </div>
                <div className='listing4'>
                    <img className='image4' src={listingImage[10]} alt='listing' onError={this.ifNA}/>
                    <h5>{listingTitle[10]}</h5>
                    <p>{listingDescription[10]}</p>
                </div>
                <div className='listing5'>
                    <img className='image5' src={listingImage[11]} alt='listing' onError={this.ifNA}/>
                    <h5>{listingTitle[11]}</h5>
                    <p>{listingDescription[11]}</p>
                </div>
                <div className='listing0'>
                    <img className='image0' src={listingImage[12]} alt='listing' onError={this.ifNA}/>
                    <h5>{listingTitle[12]}</h5>
                    <p>{listingDescription[12]}</p>
                </div>
                <div className='listing1'>
                    <img className='image1' src={listingImage[13]} alt='listing' onError={this.ifNA}/>
                    <h5>{listingTitle[13]}</h5>
                    <p>{listingDescription[13]}</p>
                </div>
                <div className='listing2'>
                    <img className='image2' src={listingImage[14]} alt='listing' onError={this.ifNA}/>
                    <h5>{listingTitle[14]}</h5>
                    <p>{listingDescription[14]}</p>
                </div>
                <div className='listing3'>
                    <img className='image3' src={listingImage[15]} alt='listing' onError={this.ifNA}/>
                    <h5>{listingTitle[15]}</h5>
                    <p>{listingDescription[15]}</p>
                </div>
                <div className='listing4'>
                    <img className='image4' src={listingImage[16]} alt='listing' onError={this.ifNA}/>
                    <h5>{listingTitle[16]}</h5>
                    <p>{listingDescription[16]}</p>
                </div>
                <div className='listing5'>
                    <img className='image5' src={listingImage[17]} alt='listing' onError={this.ifNA}/>
                    <h5>{listingTitle[17]}</h5>
                    <p>{listingDescription[17]}</p>
                </div>
            </div>
        )
    }
}

export default Listings;