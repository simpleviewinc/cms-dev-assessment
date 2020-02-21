import React, {useState} from 'react'
import backupImage from '../imgs/fallback.jpg'
import LearnButton from './SlideUpButton'

export default (props) => {

    let [hidden, setHidden] = useState(true)

    function addDefaultSource(e){
        e.target.src = backupImage
    }
    return(
        <div className='bigCard2' onMouseEnter={()=>setHidden(false)} onMouseLeave={()=>setHidden(true) } >
            <img src={props.row.mediaurl} alt='thisone' onError={addDefaultSource}/>
            <div style={{display: 'flex', paddingLeft:'25px', flexDirection:'column'}}>
            <h2>{props.row.title}</h2>
            <p>{props.row.description}</p>
            </div>

            <div className='fadeout'></div>
            <LearnButton hidden={hidden} />
        </div>
    )
}