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
				<input onSelect={this.clearDefaultValue.bind(this)} ref="name" defaultValue="Gustavo Capanema Palace"/>
			</form>
		)
	}
}

export default SuggestionForm;