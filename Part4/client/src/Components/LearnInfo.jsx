import React from 'react'

export default function(props){
    return(
        <div className={props.hidden === true ? 'infoHidden' : 'infoShown'}>
            <p>{props.info}</p>
        </div>
    )
}