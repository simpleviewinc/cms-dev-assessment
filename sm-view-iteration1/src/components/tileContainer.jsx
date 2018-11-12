import React, { Component } from 'react';
import Tile from './tile';


class TileContainer extends Component {
    render () {
        return(
            <React.Fragment>
                <div className="tile-container">
                    <Tile tileClass="tile-large"/>
                    <Tile tileClass="small-tile"/>
                    <Tile tileClass="small-tile"/>
                </div>
                <div className="tile-container">
                    <Tile tileClass="small-tile"/>
                    <Tile tileClass="small-tile"/>
                    <Tile tileClass="small-tile"/>
                </div>
            </React.Fragment>
        );
    }
}
export default TileContainer;