import React, { Component } from 'react';

class Tile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFocused: false
        }
    }

    handleMouseOver = (flag) => () => {
        this.setState({isFocused: flag})
    };

    render () {
        const {tileImage,tileContent,tileTitle} = this.props;
        return(
            <div className={`tile ${this.props.tileClass}`} onMouseEnter={this.handleMouseOver(true)} onMouseLeave={this.handleMouseOver(false)}>
                <object data="https://raw.githubusercontent.com/simpleviewinc/cms-dev-assessment/master/comps/fallback.jpg" type="image/png" className={`tile-img large-img image-${this.props.tileClass}`}>
                    <img alt= "sv" src={tileImage} className={`tile-img large-img image-${this.props.tileClass}`} />
                </object>
                <h1 className="tile-header">{tileTitle}</h1>
                <section className ="tile-content">{tileContent}
                    <div className="fadeContent"></div>
                </section>
                {this.state.isFocused ? <button className="btn btn-danger animated bounceInUp">Read More</button> : null }     
            </div>
        );
    }
}
export default Tile;