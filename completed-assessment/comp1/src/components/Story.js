import React, {Component} from "react";

class Story extends Component {
    render(){
        const {title, story, url} = this.props
        return(
            <div className="story">
                <div className="picture">
                    <img onError={() => {this.img.src = 'images/fallback.jpg'; this.onError=null;}} src={url} ref={img => this.img = img}/>
                </div>
                <div className="text">
                    <h2>{title}</h2>
                    <p>{story}</p>
                    <div className="white"></div>
                </div>
            </div>
        );
    }
}

export default Story;