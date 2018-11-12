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
        return(
            <div className={`tile ${this.props.tileClass}`} onMouseEnter={this.handleMouseOver(true)} onMouseLeave={this.handleMouseOver(false)}>
                    <img alt = "sv" src="https://via.placeholder.com/500" className={`tile-img large-img image-${this.props.tileClass}`} />
                    <h1 className = "tile-header">Title</h1>
                    <section className = "tile-content">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi reprehenderit 
                        laudantium modi, expedita ducimus, illo a sed laboriosam fugiat aperiam debitis 
                        necessitatibus quam impedit, voluptates pariatur sunt perferendis laborum porro 
                        iusto natus facilis. Quis ex laudantium, excepturi maiores architecto pariatur 
                        reiciendis in voluptate, doloribus ea dolorem, necessitatibus nesciunt ipsam 
                        fugiat voluptatem accusamus. Soluta qui expedita, nobis aperiam beatae adipisci 
                        explicabo exercitationem ea ducimus doloremque fugit sequi, illo corrupti. 
                        Ratione quo, dignissimos autem sint quibusdam quod est corporis optio quas 
                        delectus blanditiis beatae nemo. Animi ab ut necessitatibus sint fuga ullam, 
                        <div className="fadeContent"></div>
                    </section>
                { this.state.isFocused ? <button className="btn btn-danger">Read More</button> : null }     
            </div>
        );
    }
}
export default Tile;