import React from 'react';
import jQuery from 'jquery';

class BuildingForm extends React.Component {
	constructor() {
		super();

		this.state = {
			rating: 0
		}		
	}

	addBuilding(event) {
		event.preventDefault();

		let component = this
		let building = {
			id: null,
			image: this.refs.image.value,
			name: this.refs.name.value,
			location: this.refs.location.value,
			architect: this.refs.architect.value,
			build_year: this.refs.build_year.value
		}

		console.log(building)

		jQuery.ajax ({
    	type: "POST",
    	url: "https://whispering-refuge-37381.herokuapp.com/buildings/",
    	data: JSON.stringify ({
    		building: building
    	}),
    	contentType: "application/json",
    	dataType: "json"
	  })

	  .done(function(data) {
	  	component.props.onChange();
	  })
	}	

	changeRating(event) {
		this.setState({
			rating: event.target.value
		});
	}

	render() {
		return( 
			<form onSubmit={this.addBuilding.bind(this)}>
				<input ref="name" placeholder="Building name"/>
				<input ref="location" placeholder="Location"/>
				<input ref="architect" placeholder="Architect"/>
				<input ref="build_year" placeholder="Build Year"/>
				<input ref="image" placeholder="Image"/>
				<button type="submit">Add</button>
			</form>
		)
	}
}

export default BuildingForm;