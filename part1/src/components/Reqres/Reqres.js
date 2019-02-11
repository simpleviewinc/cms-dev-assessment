import React, { Component } from 'react';
import "./Reqres.css";
import { renderComponent } from 'recompose';

class Reqres extends Component {
    constructor() {
        super();
        this.state = {
            pictures: [],
        };
    }


componentDidMount() {
    fetch('https://sv-reqres.now.sh/api/listings/?per_page=2')
        .then(results => {
            return results.json();

        }).then(data => {
            let pictures = data.results.map((pic) => {
                return (
                    <div key={pic.results}>
                        <img src={pic.picture.medium} />
                    </div>
                )
            })
            this.setstate({ pictures: pictures });
            console.log("state", this.state.pictures);
        })
    }

render() {
    return(
        <div className="container2">
            <div className="container1">{this.state.pictures}</div>
        </div>
    )
    }
}
export default Reqres;