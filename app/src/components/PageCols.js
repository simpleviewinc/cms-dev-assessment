import React, {
  Component,
} from 'react';


import '../temp/styles/index.css';

class PageCols extends Component {
  constructor() {
    super();
    this.state = {
      listingsData: [],
      size:0,
      showButton:false
    }
  }

  componentDidMount() {

    this.fetchData("listings");
  }

  fetchData(type){

    if(type === "listings2"){
      type = "listings";
    }
    console.log("prop " + type);
    fetch('https://sv-reqres.now.sh/api/' + type + '/')
    .then(results => {
      return results.json();
    }).then(data => {
      var listings = data.data;;
      console.log("json ret " + listings.length);
      var size = listings.length;
      this.setState({
        size:size,
        listingsData: listings
      });
    });

  }

  componentWillUpdate(nextProps, nextState){

    if(this.props.infoType !== nextProps.infoType){
      console.log("prop update " + nextProps.infoType);
      this.fetchData(nextProps.infoType);
      return true;
    }

    if(this.state !== nextState){
      return true;
    }

    return true;
  }

  addDefaultSrc(ev){
    ev.target.src = require('../images/fallback.jpg');
  }

   revealMore(id){
     console.log("refs press " + id);
     var r = id;
  
     //var x = this.refs[r].getDOMNode();
    
    this.setState({
      showButton:false
    });
                               
   }
  showButton(show){
    console.log("show " + show)
    this.setState({
      showButton:false
    });

  }

  render() {

    var listings = this.state.listingsData.map((data, i) => (
      <div key={data.recid} ref={data.recid} id="mainItem" className={(i === 0) ? "grid-view__item_first" : (i === this.state.size-1 ) ? "grid-view__item_last" : "grid-view__item"}>
      <img onError={this.addDefaultSrc} className={(i === this.state.size-1) ? "card-img-top_last" : "card-img-top"}  src={data.mediaurl} alt="img placeholder"/>
      <div className={(i === this.state.size-1) ? "item-body_last" : "item-body"} onMouseOver={() => this.showButton(true)} onMouseOut={() => this.showButton(false)}>
        <h5>{data.title}</h5>
        <p className="text_info" id="text_info">{data.description}</p>
        <div className="grid-view__fade_out" id="fade-out"></div>
        <button style={(this.state.showButton) ? {display:"block"} : {display:"none"}} id="more-link" onClick={() => this.revealMore(data.recid)}>&mdash; more &mdash;</button>
        
      </div>
      
    </div>
    ));

    return (
      
        <div className="grid-view">
        {listings}
        </div>
          
    
    
    );
  }
}

export default PageCols;