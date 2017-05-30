import React from 'react';
import { Link } from 'react-router';

const About = () => ( 
  <section className="about__wrapper">
    <Link className="about" to="/about">
      <div>
        <h2>
          About
        </h2>
        <p>
          Brutalist architecture is a movement in architecture that flourished from the 1950s to the mid-1970s, descending from the modernist architectural movement of the early 20th century.
        </p>
        <p>
          <span className="about__link">Read more</span>
        </p>
      </div>
    </Link>
    <Link className="about dark" to="/architects">
      <div>
        <h2>
          Architects
        </h2>
        <p>
          Brutalist architecture is a movement in architecture that flourished from the 1950s to the mid-1970s, descending from the modernist architectural movement of the early 20th century.
        </p>
        <p>
          <span className="about__link">Read more</span>
        </p>
      </div>
    </Link>
  </section>
);

export default About;