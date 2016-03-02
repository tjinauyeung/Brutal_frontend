import React from 'react';
import Review from './Review';
import ReviewForm from './ReviewForm';
import jQuery from 'jquery';

class ReviewList extends React.Component {
  constructor(){
    super();

    this.state = {
      reviews: [],
    };
  }

  reload(event) {
  	let buildingId = this.props.id
    let component = this;
    jQuery.getJSON("https://whispering-refuge-37381.herokuapp.com/buildings/" + buildingId + "/reviews/", function(data){
      component.setState({
        reviews: data.reviews
      });
    });
  }

  componentDidMount() {
    this.reload();
  }

	renderReview(review) {
		return (
			<Review id={review.id} key={review.id} name={review.name} description={review.description} rating={review.rating} />
		);
	}

	render() {
		return(
			<div>
				<p>reviews:</p>
				{this.state.reviews.map(this.renderReview.bind(this), this)}
				<ReviewForm />
			</div>
		);
	}
}

export default ReviewList; 