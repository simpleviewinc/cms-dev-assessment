import React, {Component} from 'react';
import "./imageContainer.css"
import fallback from "../../assets/fallback.jpg"



class ImageContainer extends Component{

render(){
    return(
        <div className={
            this.props.imagesDisplayed ===">=" ? "image-container-2" :"image-container"}>
            <img src={this.props.mediaurl}
            /* uses fallback image for broken urls */
            onError={e => {
                e.target.onerror = null;
                e.target.src = fallback
            }}
            />
            <div className={"text-block"}>
            {this.props.title}
            </div>
        </div>
    )
    }
}

export default ImageContainer