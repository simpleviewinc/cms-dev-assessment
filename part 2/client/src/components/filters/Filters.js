import React from 'react';
import './Filters.scss';

const Filters = ({ currentFilter, changeFilter }) => {
  let filters = ['all', 'listings', 'events', 'offers'];
  return (
    <div className="filter">
      {filters.map(filter => {
        return (
          <button
            key={filter}
            className={
              currentFilter === filter
                ? 'active filter-option'
                : 'filter-option'
            }
            value={filter}
            onClick={e => changeFilter(e)}
          >
            {filter}
          </button>
        );
      })}
    </div>
  );
};

export default Filters;
