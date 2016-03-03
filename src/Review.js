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
      <ul>
        <li><em>By: {this.state.name}</em></li>
        <li><span>{this.state.description}</span></li>
        <li>Appreciation: <strong>{this.state.rating}</strong></li>
      </ul>
		);
	}
}

export default Review; 