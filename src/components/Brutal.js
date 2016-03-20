import React from 'react';
import BuildingList from './BuildingList';
import SuggestionForm from './SuggestionForm';
import About from './About';
import Footer from './Footer';

class Brutal extends React.Component {

	render() {

		return(
			<div className="container">
				<header className="header">brutalist architecture</header>
				<About />
				<BuildingList />
				<SuggestionForm />
				<Footer />
			</div>
		);
	}
}

export default Brutal; 