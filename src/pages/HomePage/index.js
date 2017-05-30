import React, { Component } from 'react';
import Header from '../../components/Header';
import About from '../../components/About';
import Filter from '../../components/Filter';
import Grid from '../../components/Grid';
import Loader from '../../components/Loader';
import Suggestion from '../../components/Suggestion';
import Footer from '../../components/Footer';
import $ from 'jquery';

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      isLoading: true
    };
  }

  getBuildings() {
    let component = this;
    $.getJSON("https://whispering-refuge-37381.herokuapp.com/buildings.json", function(data){
      component.setState({
        items: data.buildings,
        isLoading: false
      });
    });
  }

  componentDidMount() {
    this.getBuildings();
  }

  render() {
    return(
      <div className="container">
        <Header />
        <About />
        <Filter />
        { this.state.isLoading
          ? <Loader /> 
          : <Grid items={this.state.items} /> }
        <Suggestion />
        <Footer />
      </div>
    );
  }
}

export default HomePage; 