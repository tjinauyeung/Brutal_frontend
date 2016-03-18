import React from 'react';
import BuildingList from './BuildingList';
import SuggestionForm from './SuggestionForm';

class Brutal extends React.Component {

	render() {

		return(
			<div className="container">
				<header className="header">brutalist architecture</header>
				<BuildingList />
				<div className="clearfix"></div>
				<SuggestionForm />
			</div>
		);
	}
}

export default Brutal; 