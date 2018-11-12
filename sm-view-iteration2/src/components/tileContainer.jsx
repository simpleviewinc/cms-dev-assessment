import React, { Component } from 'react';
import Tile from './tile';

class TileContainer extends Component {
    render () {
        const {elementData} = this.props;
        return(
            <React.Fragment>
                <div className="tile-container">
                    <Tile tileTitle = {elementData[0].title} tileImage = {elementData[0].mediaurl} tileContent={elementData[0].description} tileClass="tile-large"/>
                    <Tile tileTitle = {elementData[1].title} tileImage = {elementData[1].mediaurl} tileContent={elementData[1].description} tileClass="small-tile"/>
                    <Tile tileTitle = {elementData[2].title} tileImage = {elementData[2].mediaurl} tileContent={elementData[2].description} tileClass="small-tile"/>
                </div>
            </React.Fragment>
        );
    }
}
export default TileContainer;