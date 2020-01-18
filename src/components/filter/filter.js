import React, { Component } from 'react';
import './filter.css'

class filter extends Component {
  render() {
    return (
      <div className="filter">
        <h2>Где сейчас теплее чем</h2>
        <div >
          <input
            type="range"
            min="0"
            max="100"
            defaultValue="0"
            step="2"
            id="filter"
            className="filter-slider"
             />
        </div>
      </div>
    );
  }
}

export default filter;
