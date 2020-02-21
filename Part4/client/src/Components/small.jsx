import React, {useState} from 'react'
import backupImage from '../imgs/fallback.jpg'
import LearnInfo from './LearnInfo'

export default (props) => {

    let [hidden, setHidden] = useState(true)
   


    return(
        
            <div className='smallCard' style={props.row == null ? {backgroundImage: `url(${backupImage})`} : {backgroundImage: `url(${props.row.mediaurl}), url(${backupImage})`}} onMouseEnter={()=>setHidden(false)} onMouseLeave={()=>setHidden(true) }>
                <div className={props.state.show === true ? 'coverHidden' : 'cover'}></div>
                <div className='nameCard'><h2>{props.row.number}. {props.row.title}</h2></div>
                
                <LearnInfo info={props.row.description} hidden={hidden} />
            
        </div>
    )
}