import React from 'react'
import Big from './big'
import Big2 from './big2'
import Small from './small'
import HeadButton from './headButtons'



let styles = {
    main: {
        maxWidth: '1200px'
    },
    display: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    }
}


export default (props) => {
    return(
        <div style={styles.main}>
                            <div className='headButtons'>
                    <HeadButton state={props.state} filter={props.filter} name={'All'}/>
                    <HeadButton state={props.state} filter={props.filter} name={'Listings'}/>
                    <HeadButton state={props.state} filter={props.filter} name={'Events'}/>
                    <HeadButton state={props.state} filter={props.filter} name={'Offers'}/>
                </div>
            <div style={styles.display}>

            {
                props.state.data.map(
                    row=>(
                        
                        row.number === 1 ?
                        (<Big row={row}/>)
                        :
                        row.number === 2 ?
                        (<Small row={row}/>)
                        :
                        row.number === 3 ?
                        (<Small row={row}/>)
                        :
                        row.number === 4 ?
                        (<Small row={row}/>)
                        :
                        row.number === 5 ?
                        (<Small row={row}/>)
                        :
                        row.number === 6 ?
                        (<Big2 row={row}/>)
                        :null
                        
                    )
                )
            }
            </div>
        </div>
    )
}