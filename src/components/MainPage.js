import React from 'react';
import Header from './global/Header';
import About from './mainpage/About';
import BuildingList from './mainpage/BuildingList';
import SuggestionForm from './global/SuggestionForm';
import Footer from './global/Footer';

class Main extends React.Component {

	render() {

		return(
			<div className="container">
				<Header />
				<About />
				<BuildingList />
				<SuggestionForm />
				<Footer />
			</div>
		);
	}
}

export default Main; 