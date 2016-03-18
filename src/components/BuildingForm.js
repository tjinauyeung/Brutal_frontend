import React from 'react';
import jQuery from 'jquery';

class BuildingForm extends React.Component {
	constructor() {
		super();
	}

	submitForm(event) {
		event.preventDefault();
	}

	clearDefaultValue(event) {
		this.refs.name.defaultValue = ""
	}

	render() {

		return( 
			<form className="buildingform" onSubmit={this.submitForm.bind(this)}>
				<input onSelect={this.clearDefaultValue.bind(this)} ref="name" defaultValue="Gustavo Capanema Palace"/>
			</form>
		)
	}
}

export default BuildingForm;