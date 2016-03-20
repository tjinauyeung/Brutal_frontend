import React from 'react';
import BuildingListItem from './BuildingListItem';
import jQuery from 'jquery';

class BuildingList extends React.Component {
  constructor(){
    super();

    this.state = {
      buildings: [],
      isLoading: true
    };
  }

  reload(event) {
    let component = this;
    jQuery.getJSON("https://whispering-refuge-37381.herokuapp.com/buildings.json", function(data){
      component.setState({
        buildings: data.buildings,
        isLoading: false
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
    if (this.state.isLoading) {
      return (
        <section className="loader-wrapper ball-scale"><div></div></section>
      )
    } else {
      return(
  			<section className="clearfix">
  				{this.state.buildings.map(this.renderBuilding.bind(this),this)}
  			</section>
  		);
    }
	}
}

export default BuildingList; 