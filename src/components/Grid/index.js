import React from 'react';
import GridItem from '../GridItem';

const Grid = (props) => (
  <section className="grid">
    { props.items.map(item => (
      <GridItem
        key={item.id}
        id={item.id}
        name={item.name}
        description={item.description}
        location={item.location}
        architect={item.architect}
        image={item.image}
        buildyear={item.build_year}
      />
    )) }
  </section>
);

export default Grid; 