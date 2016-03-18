import React from 'react';
import BuildingListItem from './BuildingListItem';
import BuildingForm from './BuildingForm';
import jQuery from 'jquery';

class BuildingList extends React.Component {
  constructor(){
    super();

    this.state = {
      buildings: [],
    };
  }

  reload(event) {
    let component = this;
    jQuery.getJSON("https://whispering-refuge-37381.herokuapp.com/buildings.json", function(data){
      component.setState({
        buildings: data.buildings
      });
    });
  }

  componentDidMount() {
    this.reload();
  }

	renderBuilding(building) {
		return (
			<BuildingListItem id={building.id} key={building.id} name={building.name} image={building.image} location={building.location} build_year={building.build_year} architect={building.architect} rating={building.rating}/>
		)
	}

	render() {

		return(
			<section>
				{this.state.buildings.map(this.renderBuilding.bind(this),this)}
			</section>
		);
	}
}

export default BuildingList; 