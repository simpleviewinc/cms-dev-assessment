import React from 'react';
import Button from './Button';

import { connect } from 'react-redux';
import { setFilter } from '../actions';

const mapStateToProps = (state) => {
    return {
      filter: state.setToggle.filter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setFilter: (filter) => {
            dispatch(setFilter(filter))
        }
    }
}

const ButtonList = ({ filter, setFilter }) => {
    return (
      <div className="button-list">
        <Button filterName="all" filter={filter} setFilter={setFilter}/>
        <Button filterName="listings" filter={filter} setFilter={setFilter}/>
        <Button filterName="events" filter={filter} setFilter={setFilter}/>
        <Button filterName="offers" filter={filter} setFilter={setFilter}/>
    </div>);
}

export default connect(mapStateToProps, mapDispatchToProps)(ButtonList); 