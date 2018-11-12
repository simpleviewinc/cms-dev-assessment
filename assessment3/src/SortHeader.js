import React, {Component} from 'react';

class SortHeader extends Component {
    
    
    buttonClicked(str){
        this.props.onFilterChange(str);
    }

    render(){
        return(
        <div class="sort-header row">
            <div class="col-xs-3" ><button class="btn btn-primary btn-md active" onClick={this.buttonClicked.bind(this, "All")} >All</button></div>
            <div class="col-xs-3" ><button class="btn btn-secondary btn-md active" onClick={this.buttonClicked.bind(this, "Listings")} >Listings</button></div>
            <div class="col-xs-3" ><button class="btn btn-secondary btn-md active" onClick={this.buttonClicked.bind(this, "Events")} >Events</button></div>
            <div class="col-xs-3" ><button class="btn btn-secondary btn-md active" onClick={this.buttonClicked.bind(this, "Offers")} >Offers</button></div>
        </div>
        );
    }
}

export default SortHeader;