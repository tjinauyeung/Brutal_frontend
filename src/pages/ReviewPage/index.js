import React, { Component } from 'react';
import Header from '../../components/Header';
import Suggestion from '../../components/Suggestion';
import Footer from '../../components/Footer';
import Reviews from '../../components/Reviews';
import BuildingDetail from '../../components/BuildingDetail';

import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

import jQuery from 'jquery';

class ReviewPage extends Component {
  constructor() {
    super();
    this.state = {
      building: {},
      reviews: []
    };
  }

  componentDidMount() {
    this.getData();
    this.scrollToTop();
  }

  getData() {
    let buildingId = this.props.params.reviewId;
    let component = this;
    jQuery.getJSON(
      'https://whispering-refuge-37381.herokuapp.com/buildings/' +
        buildingId +
        '.json',
      function(data) {
        component.setState({
          building: data.building
        });
      }
    );
  }

  scrollToTop() {
    window.scrollTo(0, 0);
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
    };

    const {
      name,
      image,
      architect,
      location,
      build_year,
      rating
    } = this.state.building;

    return (
      <div className="container">
        <Header />
        <div className="columns">
          <BuildingDetail
            name={this.state.building.name}
            image={this.state.building.image}
            architect={this.state.building.architect}
            location={this.state.building.location}
            build_year={this.state.building.build_year}
            rating={this.state.building.rating}
          />
          <Reviews id={this.props.params.buildingId} />
        </div>
        <Suggestion />
        <Footer />
        <Link to="/">
          <img
            style={backbtn}
            src="https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_arrow_back_48px-128.png"
          />
        </Link>
      </div>
    );
  }
}

export default ReviewPage;
