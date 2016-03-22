import React from 'react';
import Header from './global/Header';
import Building from './reviewspage/Building';
import SuggestionForm from './global/SuggestionForm';
import Footer from './global/Footer';
import jQuery from 'jquery';
import ReviewList from './reviewspage/ReviewList';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

class BuildingPage extends React.Component {
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

    const backbtn = {
      position: 'fixed',
      height: '80px',
      width: '80px',
      margin: '20px',
      zIndex: 1,
      top: '0',
      right: '0'
    }

		return(

      <div className="container">
        <Header />

        <section className="clearfix">
          <Building 
            name={this.state.building.name}
            image={this.state.building.image}  
            architect={this.state.building.architect}
            location={this.state.building.location}
            build_year={this.state.building.build_year}
            rating={this.state.building.rating}
          />

          <ReviewList id={this.props.params.buildingId} />
        </section>
        <SuggestionForm />
        <Footer />

        <Link to="/">
          <img style={backbtn} src="https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_arrow_back_48px-128.png"/>
        </Link>
			</div>

		);
	}
}

export default BuildingPage; 