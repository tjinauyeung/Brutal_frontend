import React from 'react';
import { useDefaultSrc } from '../../utils';

const BuildingDetail = (props) => (
  <div className="building--wrapper">
    <img className="building__image" src={props.image} onError={useDefaultSrc}/>
  </div>
);

export default BuildingDetail;