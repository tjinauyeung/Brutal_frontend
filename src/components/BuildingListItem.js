import React from 'react';
import { Link } from 'react-router';

class BuildingListItem extends React.Component {
	constructor() {
		super();
	}

	render() {
		
		return(
			<Link to={"/building/" + this.props.id }>
				<div className="grid--25 buildinglist--item">
					<div className="buildinglist--image">
						<img className="buildinglist--image--bg" src={this.props.image} />
					</div>
					<div className="buildinglist--info">
						<ul className="buildinglist--info--list">
							<li>Name: <strong>{this.props.name}</strong></li>
							<li>Location: <strong>{this.props.location}</strong></li>
							<li>Build Year: <strong>{this.props.build_year}</strong></li>
							<li>Architect: <strong>{this.props.architect}</strong></li>	
							<li>Appreciation: <strong>{this.props.rating}</strong></li>
						</ul>
					</div>
				</div>
			</Link>
		);
	}
}

export default BuildingListItem; 