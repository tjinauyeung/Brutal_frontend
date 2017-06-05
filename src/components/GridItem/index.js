import React from 'react';
import { useDefaultSrc } from '../../utils';
import { Link } from 'react-router';

const GridItem = props =>
  <Link className="grid__item" to={'/review/' + props.id}>
    <img onError={useDefaultSrc} className="grid__image" src={props.image} />
    <div className="grid__info">
      <ul className="grid__info-list">
        <li>{props.name}</li>
        <li>{props.location}</li>
        <li>{props.architect}</li>
        <li>{props.buildyear}</li>
      </ul>
    </div>
  </Link>;

export default GridItem;
