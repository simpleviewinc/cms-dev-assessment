import React, {Component} from 'react';
import '../assets/css/Events.css';

export class Events extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props)
    }

    ifNA(a){
        a.target.src = 'https://github.com/simpleviewinc/cms-dev-assessment/blob/master/comps/fallback.jpg'
    }

    render(){
        const eventTitle = this.props.events.map(event => {
            return event.title
        })

        const eventImage = this.props.events.map(event => {
            return event.mediaurl
        })

        const eventDescription = this.props.events.map(event => {
            return event.description
        })

        return (
            <div className='events'>
                <div className='event0'>
                    <img className='image0' src={eventImage[0]} alt='event' onError={this.ifNA}/>
                    <h5>{eventTitle[0]}</h5>
                    <p>{eventDescription[0]}</p>
                </div>
                <div className='event1'>
                    <img className='image' src={eventImage[1]} alt='event' onError={this.ifNA}/>
                    <h5>{eventTitle[1]}</h5>
                    <p>{eventDescription[1]}</p>
                </div>
                <div className='event2'>
                    <img className='image' src={eventImage[2]} alt='event' onError={this.ifNA}/>
                    <h5>{eventTitle[2]}</h5>
                    <p>{eventDescription[2]}</p>
                </div>
                <div className='event3'>
                    <img className='image' src={eventImage[3]} alt='event' onError={this.ifNA}/>
                    <h5>{eventTitle[3]}</h5>
                    <p>{eventDescription[3]}</p>
                </div>
                <div className='event4'>
                    <img className='image' src={eventImage[4]} alt='event' onError={this.ifNA}/>
                    <h5>{eventTitle[4]}</h5>
                    <p>{eventDescription[4]}</p>
                </div>
                <div className='event5'>
                    <img className='image5' src={eventImage[5]} alt='event' onError={this.ifNA}/>
                    <h5>{eventTitle[5]}</h5>
                    <p>{eventDescription[5]}</p>
                </div>
                <div className='event0'>
                    <img className='image0' src={eventImage[6]} alt='event' onError={this.ifNA}/>
                    <h5>{eventTitle[6]}</h5>
                    <p>{eventDescription[6]}</p>
                </div>
                <div className='event1'>
                    <img className='image' src={eventImage[7]} alt='event' onError={this.ifNA}/>
                    <h5>{eventTitle[7]}</h5>
                    <p>{eventDescription[7]}</p>
                </div>
                <div className='event2'>
                    <img className='image' src={eventImage[8]} alt='event' onError={this.ifNA}/>
                    <h5>{eventTitle[8]}</h5>
                    <p>{eventDescription[8]}</p>
                </div>
                <div className='event3'>
                    <img className='image' src={eventImage[9]} alt='event' onError={this.ifNA}/>
                    <h5>{eventTitle[9]}</h5>
                    <p>{eventDescription[9]}</p>
                </div>
                <div className='event4'>
                    <img className='image' src={eventImage[10]} alt='event' onError={this.ifNA}/>
                    <h5>{eventTitle[10]}</h5>
                    <p>{eventDescription[10]}</p>
                </div>
                <div className='event5'>
                    <img className='image5' src={eventImage[11]} alt='event' onError={this.ifNA}/>
                    <h5>{eventTitle[11]}</h5>
                    <p>{eventDescription[11]}</p>
                </div>
                <div className='event0'>
                    <img className='image0' src={eventImage[12]} alt='event' onError={this.ifNA}/>
                    <h5>{eventTitle[12]}</h5>
                    <p>{eventDescription[12]}</p>
                </div>
                <div className='event1'>
                    <img className='image' src={eventImage[13]} alt='event' onError={this.ifNA}/>
                    <h5>{eventTitle[13]}</h5>
                    <p>{eventDescription[13]}</p>
                </div>
                <div className='event2'>
                    <img className='image' src={eventImage[14]} alt='event' onError={this.ifNA}/>
                    <h5>{eventTitle[14]}</h5>
                    <p>{eventDescription[14]}</p>
                </div>
                <div className='event3'>
                    <img className='image' src={eventImage[15]} alt='event' onError={this.ifNA}/>
                    <h5>{eventTitle[15]}</h5>
                    <p>{eventDescription[15]}</p>
                </div>
                <div className='event4'>
                    <img className='image' src={eventImage[16]} alt='event' onError={this.ifNA}/>
                    <h5>{eventTitle[16]}</h5>
                    <p>{eventDescription[16]}</p>
                </div>
                <div className='event5'>
                    <img className='image5' src={eventImage[17]} alt='event' onError={this.ifNA}/>
                    <h5>{eventTitle[17]}</h5>
                    <p>{eventDescription[17]}</p>
                </div>
            </div>
        )
    }
}

export default Events;