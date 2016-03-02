import React from 'react';
import jQuery from 'jquery';

class ReviewForm extends React.Component {
	constructor() {
		super();

		this.state = {
			rating: 0
		}		
	}

	addBuilding(event) {
		event.preventDefault();

		let buildingId = this.props.params.buildingId

		let component = this
		let building = {
			id: null,
			image: this.refs.image.value,
			name: this.refs.name.value,
			location: this.refs.location.value,
			architect: this.refs.architect.value,
			build_year: this.refs.build_year.value
		}

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
			<form>
				<p>Leave a review!</p>
				<input ref="name" placeholder="Username"/>
				<textarea ref="description" placeholder="leave your review here"/>
				<select onChange={this.changeRating.bind(this)}>
					 <option value="1">1</option>
					 <option value="2">2</option>
					 <option value="3">3</option>
					 <option value="4">4</option>
					 <option value="5">5</option>
				</select>
				<button type="submit">Add</button>
			</form>
		)
	}
}

export default ReviewForm;