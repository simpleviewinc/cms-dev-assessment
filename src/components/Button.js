import React from 'react';

const FilterButton = ({filterName, filter, setFilter}) => {

	const handleClick = (e) => {
		setFilter(filterName);
	}

	return (
		<button type="button"
		className={"btn btn-default mr-2 " + (filterName === filter ? 'selected' : '')} 
		onClick={handleClick}>
		{filterName}
		</button>
		)
}

export default FilterButton;