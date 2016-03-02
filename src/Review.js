import React from 'react';
import jQuery from 'jquery';

class Review extends React.Component {
  constructor() {
    super();
  }

  componentWillMount() {
    this.setState({
      name: this.props.name,
      description: this.props.description,
      rating: this.props.rating
    })
  }

	render() {
		return(
			<div>
        <p>{this.state.name}</p>
        <p>{this.state.description}</p>
        <p>{this.state.rating}</p>
			</div>

		);
	}
}

export default Review; 