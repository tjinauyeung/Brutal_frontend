import React from 'react';
import BuildingListItem from './BuildingListItem';
import BuildingForm from './BuildingForm';
import jQuery from 'jquery';

class BuildingList extends React.Component {
  constructor(){
    super();

    this.state = {
      buildings: [],
      addbuildingform: false
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

	showBuildingForm(event) {
		event.preventDefault();
		this.setState({
			addbuildingform: !this.state.addbuildingform
		})
	}

	renderBuilding(building) {
		return (
			<BuildingListItem id={building.id} key={building.id} name={building.name} location={building.location} build_year={building.build_year} architect={building.architect} rating={building.rating}/>
		);
	}

	render() {
		return(
			<div>
				<button href="#" onClick={this.showBuildingForm.bind(this)}>Add Building</button>
				{this.state.addbuildingform ? <BuildingForm onChange={this.reload.bind(this)} /> : "" }
				<h2>Here is a list of all the buildings:</h2>
				{this.state.buildings.map(this.renderBuilding.bind(this),this)}
			</div>
		);
	}
}

export default BuildingList; 