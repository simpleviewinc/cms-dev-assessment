import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filterCategory } from '../../action';

export class Header extends Component {
  
  constructor() {
    super();
    this.state = {
      buttonsInfo: ['all', 'listings', 'events', 'offers']
    };
  }

  render() {
    const { filterCategory, category } = this.props;
    const buttons = this.state.buttonsInfo.map(button => {
      if(category === button ){
        return (
          <button className='active' key={ button } onClick={() => filterCategory(button)}>
            {button}
          </button>
        )
      } else {
        return (
          <button className='' key={ button } onClick={() => filterCategory(button)}>
            {button}
          </button>
        )
      }
    });
    
    return (
      <header className='header'>
        <nav>
          {
            buttons
          }
        </nav>
      </header>
    )
  }
}

export const mapStateToProps = (state) => ({
  category: state.category
});

export const mapDispatchToProps = (dispatch) => ({
  filterCategory: category => dispatch(filterCategory(category))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);