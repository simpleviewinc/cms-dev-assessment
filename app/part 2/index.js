
import React from 'react';
import ReactDOM from 'react-dom';
import './temp/styles/index.css';
import PageCols from './components/PageCols';

  class Game extends React.Component {
    constructor() {
      super();
      this.state = {
        infoType:"all"
      }
    }
  
    componentDidMount() {
  
    }

    render() {
      return (
        <div className="container">
          <PageCols 
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
  