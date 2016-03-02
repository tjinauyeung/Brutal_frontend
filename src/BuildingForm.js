import React from 'react';

class BuildingForm extends React.Component {
	constructor() {
		super();		
	}

	addBuilding(event) {
		event.preventDefault();

		let component = this

		console.log(this.refs.image.value);
		console.log(this.refs.name.value);
		console.log(this.refs.architect.value);
		console.log(this.refs.buildyear.value);

	}	

	render() {
		return( 
			<form onSubmit={this.addBuilding.bind(this)}>
				<input ref="image" placeholder="Image"/>
				<input ref="name" placeholder="Building name"/>
				<input ref="architect" placeholder="Architect"/>
				<input ref="buildyear" placeholder="Build Year"/>
				<ul>
			    <li>
		        <input type="radio" name="rating" value="0" />
		        <input type="radio" name="rating" value="1" />
		        <input type="radio" name="rating" value="2" />
		       	<input type="radio" name="rating" value="3" />
		       	<input type="radio" name="rating" value="4" />
		       	<input type="radio" name="rating" value="5" />
			    </li>
				</ul>
				<button type="submit">Add</button>
			</form>
		)
	}
}

export default BuildingForm;