import React, { Component } from 'react';
import "./Footer.css";
import { FaLongArrowAltRight, FaLongArrowAltLeft } from 'react-icons/fa';

class Footer extends Component{
    constructor(){
        super()
        this.state = {

        }
    }
    render(){
        return(
            <div className={"footer"}>
                
                <button onClick={this.props.updateImageDisplay}><FaLongArrowAltLeft
                style={{ color: 'blue' }}
                />Prev.</button>
                <button onClick={this.props.updateImageDisplay}>Next <FaLongArrowAltRight
                style={{ color: 'blue' }}
                /></button>

            </div>
        )
    }
}
export default Footer