import React from 'react'

export default function(props){
    return(
    
        <button className={props.hidden === true ? 'learnMoreHidden':'learnMore'}>Learn More</button>
    )
}