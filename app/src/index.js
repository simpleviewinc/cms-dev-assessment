
import React from 'react';
import ReactDOM from 'react-dom';
import './temp/styles/index.css';
import PageCols from './components/PageCols';

  class Game extends React.Component {
    constructor() {
      super();
      this.state = {
        infoType:"listings"
      }
    }
  
    componentDidMount() {
  
    }

    viewInfo(type){
      console.log("set state " + type);
      this.setState({
        infoType:type
      });
    }

    render() {
      return (
        <div className="container">
          <div className="buttonContainer">
            <div style={{padding:"10px"}}><button className={(this.state.infoType=="listings") ? "nav-button_clicked" : "nav-button"} onClick={()=> this.viewInfo("listings")}>All</button></div>
            <div style={{padding:"10px"}}><button className={(this.state.infoType=="listings2") ? "nav-button_clicked" : "nav-button"} onClick={()=> this.viewInfo("listings2")}>Listings</button></div>
            <div style={{padding:"10px"}}><button className={(this.state.infoType=="events") ? "nav-button_clicked" : "nav-button"} onClick={()=> this.viewInfo("events")}>Events</button></div>
            <div style={{padding:"10px"}}><button className={(this.state.infoType=="offers") ? "nav-button_clicked" : "nav-button"}  onClick={()=> this.viewInfo("offers")}>offers</button></div>
          </div>
          <PageCols 
            infoType={this.state.infoType}
          />
          
        </div>
      );
    }
  }


  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  