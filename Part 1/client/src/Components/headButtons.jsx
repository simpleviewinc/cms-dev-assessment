import React from 'react'

export default function(props){
    return(
        <div onClick={()=>{props.filter(props.name)}} className={props.state.focused === props.name ? 'buttonSelected' : null}>
            <button className={props.state.focused === props.name ? 'buttonSelect' : null}> {props.name} </button>
            </div>

    )
}