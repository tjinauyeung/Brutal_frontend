import React from 'react';
import Building from './Building';

class BuildingList extends React.Component {

	render() {
		return(
			<div>
				<h2>Here is a list of all the buildings:</h2>
				<Building />
			</div>
		);
	}
}

export default BuildingList; 