import React from 'react';
import { Link } from 'react-router';

class BuildingListItem extends React.Component {
	constructor() {
		super();
	}

componentWillMount() {
 	this.setState({
 		id: this.props.id,
 		key: this.props.key,
 		name: this.props.name,
 		image: this.props.image.toString,
 		location: this.props.location,
 		build_year: this.props.build_year,
 		architect: this.props.architect,
 		rating: this.props.rating
 	});     
}

	render() {

		let list = {
			listStyleType: 'none',
			padding: 0
		}

		return(
			<Link to={"/building/" + this.state.id }>
				<div>
					<ul style={list}>
						<li><img src={this.state.image}/></li>
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