import React, { Component } from 'react';

class filter extends Component {
  render() {
    return (
      <div >
        <h2 >Где сейчас теплее чем</h2>
        <div >
          <input
            type="range"
            min="0"
            max="100"
            defaultValue="0"
            step="2"
            onInput={this.thumbColorHandler}

            id="filter"
             />
        </div>
      </div>
    );
  }
}

export default filter;
