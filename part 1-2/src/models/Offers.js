import React, {Component} from 'react';
import '../assets/css/Offers.css';

export class Offers extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props)
    }

    ifNA(a){
        a.target.src = 'https://github.com/simpleviewinc/cms-dev-assessment/blob/master/comps/fallback.jpg'
    }

    render(){
        const offerTitle = this.props.offers.map(offer => {
            return offer.title
        })

        const offerImage = this.props.offers.map(offer => {
            return offer.mediaurl
        })

        const offerDescription = this.props.offers.map(offer => {
            return offer.description
        })

        return (
            <div className='offers'>
                <div className='offer0'>
                    <img className='image0' src={offerImage[0]} alt='offer' onError={this.ifNA}/>
                    <h2>{offerTitle[0]}</h2>
                    <p>{offerDescription[0]}</p>
                </div>
                <div className='offer1'>
                    <img className='image1' src={offerImage[1]} alt='offer' onError={this.ifNA}/>
                    <h2>{offerTitle[1]}</h2>
                    <p>{offerDescription[1]}</p>
                </div>
                <div className='offer2'>
                    <img className='image2' src={offerImage[2]} alt='offer' onError={this.ifNA}/>
                    <h2>{offerTitle[2]}</h2>
                    <p>{offerDescription[2]}</p>
                </div>
                <div className='offer3'>
                    <img className='image3' src={offerImage[3]} alt='offer' onError={this.ifNA}/>
                    <h2>{offerTitle[3]}</h2>
                    <p>{offerDescription[3]}</p>
                </div>
                <div className='offer4'>
                    <img className='image4' src={offerImage[4]} alt='offer' onError={this.ifNA}/>
                    <h2>{offerTitle[4]}</h2>
                    <p>{offerDescription[4]}</p>
                </div>
                <div className='offer5'>
                    <img className='image5' src={offerImage[5]} alt='offer' onError={this.ifNA}/>
                    <h2>{offerTitle[5]}</h2>
                    <p>{offerDescription[5]}</p>
                </div>
                <div className='offer0'>
                    <img className='image0' src={offerImage[6]} alt='offer' onError={this.ifNA}/>
                    <h2>{offerTitle[6]}</h2>
                    <p>{offerDescription[6]}</p>
                </div>
                <div className='offer1'>
                    <img className='image1' src={offerImage[7]} alt='offer' onError={this.ifNA}/>
                    <h2>{offerTitle[7]}</h2>
                    <p>{offerDescription[7]}</p>
                </div>
                <div className='offer2'>
                    <img className='image2' src={offerImage[8]} alt='offer' onError={this.ifNA}/>
                    <h2>{offerTitle[8]}</h2>
                    <p>{offerDescription[8]}</p>
                </div>
                <div className='offer3'>
                    <img className='image3' src={offerImage[9]} alt='offer' onError={this.ifNA}/>
                    <h2>{offerTitle[9]}</h2>
                    <p>{offerDescription[9]}</p>
                </div>
                <div className='offer4'>
                    <img className='image4' src={offerImage[10]} alt='offer' onError={this.ifNA}/>
                    <h2>{offerTitle[10]}</h2>
                    <p>{offerDescription[10]}</p>
                </div>
                <div className='offer5'>
                    <img className='image5' src={offerImage[11]} alt='offer' onError={this.ifNA}/>
                    <h2>{offerTitle[11]}</h2>
                    <p>{offerDescription[11]}</p>
                </div>
                <div className='offer0'>
                    <img className='image0' src={offerImage[12]} alt='offer' onError={this.ifNA}/>
                    <h2>{offerTitle[12]}</h2>
                    <p>{offerDescription[12]}</p>
                </div>
                <div className='offer1'>
                    <img className='image1' src={offerImage[13]} alt='offer' onError={this.ifNA}/>
                    <h2>{offerTitle[13]}</h2>
                    <p>{offerDescription[13]}</p>
                </div>
                <div className='offer2'>
                    <img className='image2' src={offerImage[14]} alt='offer' onError={this.ifNA}/>
                    <h2>{offerTitle[14]}</h2>
                    <p>{offerDescription[14]}</p>
                </div>
                <div className='offer3'>
                    <img className='image3' src={offerImage[15]} alt='offer' onError={this.ifNA}/>
                    <h2>{offerTitle[15]}</h2>
                    <p>{offerDescription[15]}</p>
                </div>
                <div className='offer4'>
                    <img className='image4' src={offerImage[16]} alt='offer' onError={this.ifNA}/>
                    <h2>{offerTitle[16]}</h2>
                    <p>{offerDescription[16]}</p>
                </div>
                <div className='offer5'>
                    <img className='image5' src={offerImage[17]} alt='offer' onError={this.ifNA}/>
                    <h2>{offerTitle[17]}</h2>
                    <p>{offerDescription[17]}</p>
                </div>
            </div>
        )
    }
}

export default Offers;