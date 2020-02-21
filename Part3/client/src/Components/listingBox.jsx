import React from 'react'
import Big from './big'
import Big2 from './big2'
import Small from './small'
import TallCard from './tall'
import LongCard from './long'



let styles = {
    main: {
        maxWidth: '1200px',
        minWidth: '1200px'

    },
    display: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        maxHeight: '100vh',
        overflow: 'hidden',
        padding: '30px',
        marginTop: '25px',
        transition: '1s'
    }
}


export default (props) => {
    return (
        <div style={styles.main}>
            {props.state.data[0] == null ?
                null
                :
                <div style={styles.display}>



                    <div className={props.state.pagination === 1 ? 'leftColumn2' : 'leftColumn'} >
                        { props.state.pagination === 0 ?
                        <React.Fragment>
                        <Big state={props.state} row={props.state.data[0]} />
                        <Big state={props.state} row={props.state.data[1]} />
                        </React.Fragment>
                        :
                        props.state.pagination === 1 ?
                        <React.Fragment>
                            <Small state={props.state} row={props.state.data[5]} />
                            <Small state={props.state} row={props.state.data[6]} />
                            <Small state={props.state} row={props.state.data[7]} />
                            <Small state={props.state} row={props.state.data[8]} />
                        </React.Fragment>
                        :
                        props.state.pagination === 2 ?
                        <React.Fragment>
                        <Big state={props.state} row={props.state.data[10]} />
                        <Big state={props.state} row={props.state.data[11]} />
                        </React.Fragment>
                        :
                        props.state.pagination === 3 ?
                        <React.Fragment>
                            <Big2 state={props.state} row={props.state.data[14]}/>
                        </React.Fragment>
                        :
                        null
}
                    </div>

                    <div className={props.state.pagination === 1 ? 'rightColumn2' : 'rightColumn'}>

                        {props.state.pagination === 0 ?
                            <React.Fragment>
                                <LongCard state={props.state} row={props.state.data[2]} />
                                <LongCard state={props.state} row={props.state.data[3]} />
                                <LongCard state={props.state} row={props.state.data[4]} />
                            </React.Fragment>
                            :
                            props.state.pagination === 1 ?
                            <React.Fragment>
                                <TallCard state={props.state} row={props.state.data[9]}/>
                            </React.Fragment>
                            :
                            props.state.pagination === 2 ?
                            <React.Fragment>
                                <TallCard state={props.state} row={props.state.data[12]}/>
                            </React.Fragment>
                            :
                            props.state.pagination === 3 ?
                            <React.Fragment>
                                <Big2 state={props.state} row={props.state.data[14]}/>
                            </React.Fragment>
                            :
                            null
                        }
                        <div className='paginationButtons'>
                            <button onClick={()=>{
                                props.animatedCover()
                                setTimeout(props.paginationMinus, 1000)}} ><h2>&#8592; Prev</h2></button>
                            <button onClick={() => {
                                props.animatedCover()
                                setTimeout(props.paginationAdd, 1000)
                            }} ><h2>Next &#8594;</h2></button>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}