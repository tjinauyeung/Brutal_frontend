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

		let form ={
			backgroundColor: '#e8e8e8'
		}

		return( 
			<form style={form} onSubmit={this.addBuilding.bind(this)}>
				<h3>Add a building:</h3>
				<div><p>Building name: <input ref="name" placeholder="Gustavo Capanema Palace"/></p></div>
				<div><p>Location: <input ref="location" placeholder="Rio de Janeiro"/></p></div>
				<div><p>Architect: <input ref="architect" placeholder="Le Corbusier"/></p></div>
				<div><p>Build year: <input ref="build_year" placeholder="1959"/></p></div>
				<div><p>Image (url): <input ref="image" placeholder="http://"/></p></div>
				<button type="submit">Add</button>
			</form>
		)
	}
}

export default BuildingForm;