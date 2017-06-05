import React from 'react';
import jQuery from 'jquery';

class ReviewForm extends React.Component {
  constructor() {
    super();

    this.state = {
      rating: 0
    };
  }

  submitReview(event) {
    event.preventDefault();

    let buildingId = this.props.id;
    let component = this;

    let review = {
      id: null,
      name: this.refs.name.value,
      description: this.refs.description.value,
      rating: this.state.rating
    };

    jQuery
      .ajax({
        type: 'POST',
        url:
          'https://whispering-refuge-37381.herokuapp.com/buildings/' +
            buildingId +
            '/reviews/',
        data: JSON.stringify({
          review: review
        }),
        contentType: 'application/json',
        dataType: 'json'
      })
      .done(function(data) {
        component.props.onChange();
      });
  }

  changeRating(event) {
    this.setState({
      rating: event.target.value
    });
  }

  render() {
    const btn = {
      marginTop: '20px'
    };

    return (
      <form onSubmit={this.submitReview.bind(this)}>
        <h2>Leave a review!</h2>
        <div><p>Your name:</p><input ref="name" placeholder="Username" /></div>
        <div>
          <p>Review:</p>
          <textarea ref="description" placeholder="leave your review here" />
        </div>
        <div>
          <p>Rating:</p>
          <select onChange={this.changeRating.bind(this)}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <button style={btn} type="submit">Add</button>
      </form>
    );
  }
}

export default ReviewForm;
