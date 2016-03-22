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
							<li><strong>{this.props.name}</strong></li>
							<li><strong>{this.props.location}</strong></li>
							<li><strong>{this.props.architect}</strong></li>	
							<li><strong>{this.props.build_year}</strong></li>
						</ul>
					</div>
				</div>
			</Link>
		);
	}
}

export default BuildingListItem; 