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

    const review = {
      listStyleType: 'none',
      paddingLeft: '10px',
      backgroundColor: '#e8e8e8'
    }
    

    const item = {
      lineHeight: '30px'
    }

		return(
      <ul style={review}>
        <li style={item}><em>By: {this.state.name}</em></li>
        <li style={item}><span>{this.state.description}</span></li>
        <li style={item}>Appreciation: <strong>{this.state.rating}</strong></li>
      </ul>
		);
	}
}

export default Review; 