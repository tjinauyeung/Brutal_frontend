import React, { Component } from 'react';

class Filter extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="filter">
        <label htmlFor="filter-input">Filter Buildings</label>
        <input
          className="input filter__input"
          id="filter-input"
          placeholder="Corbusier"
        />
      </div>
    );
  }
}

export default Filter;
