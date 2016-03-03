import React from 'react';
import jQuery from 'jquery';
import ReviewList from './ReviewList';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

class Building extends React.Component {
  constructor() {
    super();

    this.state = {
      building: {}
    };
  }

  componentWillMount() {
    this.findProject();
  }

  findProject(){
    let buildingId = this.props.params.buildingId;
    let component = this;

    jQuery.getJSON("https://whispering-refuge-37381.herokuapp.com/buildings/" + buildingId + ".json", function(data) {
      component.setState({
        building: data.building
      });
    });
  }


	render() {

    const title = {
      display: 'flex',
      alignItems: 'center',
      fontSize: '80px',
      fontWeight: '700',
      lineHeight: '75px',
      letterSpacing: '-3px',
      margin: '0px',
      color: 'black',
      textTransform: 'uppercase',
    }

    const item = {
      lineHeight: '30px',
      fontWeight: 'normal'
    }

    const image = {
      maxWidth: '600px',
      marginBottom: '10px'
    }

    const list = {
      listStyleType: 'none',
      padding: 0
    }

		return(
			<div>
        <h1 style={title}>{this.state.building.name}</h1>
        <ul style={list}>
				  <li><img style={image} src="http://www.wilhelminapier.nl/files/thumbnails/622eckqw.800x0.jpg" /></li>
  				<li style={item}>Architect: <strong>{this.state.building.architect}</strong></li>
  				<li style={item}>Location: <strong>{this.state.building.location}</strong></li>
  				<li style={item}>Build Year: <strong>{this.state.building.build_year}</strong></li>
  				<li style={item}>Appreciation: <strong>{this.state.building.rating}</strong></li>
				</ul>
        <ReviewList id={this.props.params.buildingId} />

			</div>

		);
	}
}

export default Building; 