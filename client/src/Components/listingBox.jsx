import React from 'react'
import Big from './big'
import Big2 from './big2'
import Small from './small'



let styles = {
    main: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        width: '1200px'
    }
}


export default (props) => {
    return(
        <div style={styles.main}>
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
    )
}