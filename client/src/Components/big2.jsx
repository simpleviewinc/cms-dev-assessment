import React from 'react'
import backupImage from '../imgs/fallback.jpg'

export default (props) => {

    function addDefaultSource(e){
        e.target.src = backupImage
    }
    return(
        <div className='bigCard2'>
            <img src={props.row.mediaurl} alt='thisone' onError={addDefaultSource}/>
            <h2>{props.row.title}</h2>
            <p>{props.row.description}</p>
            <div className='fadeout'></div>
        </div>
    )
}