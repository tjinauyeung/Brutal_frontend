import React from 'react';

class About extends React.Component {
	constructor() {
		super();
	}

	render() {

		return( 
			<section className="about--wrapper">
				<article className="about">
					<div>
					<h2>About</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam ratione alias quod molestiae voluptas! Sequi nisi dolor expedita. Tenetur, reiciendis ipsa aspernatur sed ratione quidem, repellendus consequatur architecto debitis quis?</p>
					<p> <span className="about--link--more">Read more</span></p>
					</div>
				</article>
			</section>
		)
	}
}

export default About;