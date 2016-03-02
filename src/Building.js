import React from 'react';
import jQuery from 'jquery';
import ReviewList from './ReviewList';

class Building extends React.Component {
  constructor() {
    super();

    this.state = {
      building: {}
    };
  }

  componentDidMount() {
    this.findProject();
  }

  findProject(){
    let buildingId = this.props.params.buildingId;
    let component = this;

    jQuery.getJSON("https://whispering-refuge-37381.herokuapp.com/buildings/" + buildingId + ".json", function(data) {
      component.setState({
        building: data.building
      });
    });
  }


	render() {
		return(
			<div>
				<h1>{this.state.building.name}</h1>
				<h2>{this.state.building.architect}</h2>
				<h2>{this.state.building.location}</h2>
				<h2>{this.state.building.build_year}</h2>
				<h2>{this.state.building.rating}</h2>
				<ReviewList id={this.props.params.buildingId} />
			</div>

		);
	}
}

export default Building; 