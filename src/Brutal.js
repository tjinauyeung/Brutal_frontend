import React from 'react';
import BuildingList from './BuildingList';

class Brutal extends React.Component {

	render() {
		return(
			<div>
				<nav>
					<p>Here comes the nav component</p>
				</nav>
				<header>
					<h1>Welcome to Brutal.</h1>
				</header>
				<BuildingList />
				<footer>
					<p>Here comes the footer component</p>
				</footer>
			</div>
		);
	}
}

export default Brutal; 