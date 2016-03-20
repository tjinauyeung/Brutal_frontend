import React from 'react';
import jQuery from 'jquery';

class SuggestionForm extends React.Component {
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
			<form className="suggestionform" onSubmit={this.submitForm.bind(this)}>
				<label>Suggest a building</label>
				<input onSelect={this.clearDefaultValue.bind(this)} ref="name" defaultValue="Concrete watertower in Gdansk, PL"/>
			</form>
		)
	}
}

export default SuggestionForm;