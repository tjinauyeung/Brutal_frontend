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
			<div className="suggestionform-wrapper">
				<form className="suggestionform" onSubmit={this.submitForm.bind(this)}>
					<div>
						<label>Suggest a building</label>
						<input onSelect={this.clearDefaultValue.bind(this)} ref="name" defaultValue="Concrete watertower in Gdansk, PL"/>
					</div>
				</form>
			</div>
		)
	}
}

export default SuggestionForm;