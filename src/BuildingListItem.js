import React from 'react';
import { Link } from 'react-router';

class BuildingListItem extends React.Component {
	constructor() {
		super();
	}

componentWillMount() {
 	this.setState({
 		name: this.props.name,
 		location: this.props.location,
 		build_year: this.props.build_year,
 		architect: this.props.architect,
 		rating: this.props.rating
 	});     
}

	render() {
		return(
			<Link to="/">
				<div className="">
					<ul>
						<li>Name: <strong>{this.state.name}</strong></li>
						<li>Location: <strong>{this.state.location}</strong></li>
						<li>Build Year: <strong>{this.state.build_year}</strong></li>
						<li>Architect: <strong>{this.state.architect}</strong></li>	
						<li>Appreciation: <strong>{this.state.rating}</strong></li>
					</ul>
				</div>
			</Link>
		);
	}
}

export default BuildingListItem; 