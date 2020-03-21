import React, {Component} from "react";

class Story extends Component {
    render(){
        const {title, url, idx} = this.props
        return(
            <div className="story" >
                <h2><sup>0{idx + 1}.</sup> {title}</h2>
                <div className="picture">
                    <img onError={() => {this.img.src = 'images/fallback.jpg'; this.onError=null;}} src={url} ref={img => this.img = img} alt={title}/>
                </div>
            </div>
        );
    }
}

export default Story;