import React from 'react';

class Building extends React.Component {
	constructor() {
		super();
	}

	render() {
		return(
			<h1>This is a building show page {this.props.path}</h1>
		);
	}
}

export default Building; 