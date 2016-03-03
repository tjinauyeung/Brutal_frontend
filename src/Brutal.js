import React from 'react';
import BuildingList from './BuildingList';

class Brutal extends React.Component {

	render() {

		const header = {
			display: 'flex',
			alignItems: 'center',
			fontSize: '80px',
			fontWeight: '700',
			lineHeight: '75px',
			letterSpacing: '-3px',
			color: 'black',
			textTransform: 'uppercase',
		}

		const navigation = {
			padding: '20px',
			backgroundColor: 'white',
			display: 'flex',
			justifyContent: 'center',
			fontSize: '30px',
			fontWeight: 'bold',
			textTransform: 'uppercase'
		}

		const content = {

		}

		return(
			<div style={content}>
				<header style={header}>brutalist architecture</header>
				<BuildingList />
			</div>
		);
	}
}

export default Brutal; 