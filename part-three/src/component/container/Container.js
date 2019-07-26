import React, { Component } from 'react';
import Card from '../card/Card';
import { connect } from 'react-redux';
import { ReactComponent as Arrow } from '../../arrow.svg';

export class Container extends Component {

  constructor() {
    super();
    this.state = {
      currentPage: 0,
      animation: ''
    };
  }

  changePage = (num) => {
    this.setState({
      animation: 'exit'
    }, () => this.nextPage(num));
  }

  nextPage = (num) => {
    setTimeout( () => {
    const nextPage = this.state.currentPage + num;
    if( nextPage === 4 ) {
      this.setState({
        currentPage: 0,
        animation: 'enter'
      });
    }else if( nextPage === -1 ) {
      this.setState({
        currentPage: 3,
        animation: 'enter'
      });
    }else {
      this.setState({
        currentPage: nextPage,
        animation: 'enter'
      });
    }
  }, 500);
  }

  render() {
    const { currentPage, animation } = this.state;
    const pageCards = this.props.listings[currentPage].map(( card, index )=> {
      return(
        <Card key={ card.recid } 
              gridPlacement={ `page-${ this.state.currentPage }-grid-${ index }` } 
              animation={ animation } 
              data={ card }/>
      )
    });
    return (
      <section className='container-nav'>
        <section className={ `container container-${animation}` }>
        {
          pageCards
        }
        </section>
        <nav>
          <button onClick={ () => this.changePage(-1) }>
            <Arrow className='prev-arrow'/>
            Prev.
          </button>
          <button onClick={ () => this.changePage(1) }>
            Next
            <Arrow className='next-arrow'/>
          </button>
        </nav>
      </section>
    );
  }
}

export const mapStateToProps = ( state ) => ({
  listings: state.listings
});

export default connect(mapStateToProps)(Container);