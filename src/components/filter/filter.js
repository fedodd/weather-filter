import React, { Component } from 'react';
import { Range, getTrackBackground } from 'react-range';
import './filter.css'

class filter extends Component {
  state = {
    values: [10],
    finalValues: [10],
    step: 0.1,
    min: -30,
    max: 40,
    thumbStyle: {
    }
  };



  render() {
    return (
      <div className="filter">
        <h2>Где сейчас теплее чем</h2>
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
          <Range
            values={this.state.values}
            step={this.state.step}
            min={this.state.min}
            max={this.state.max}
            onChange={values => this.setState({ values })}
            renderTrack={({ props, children }) => (
              <div
                onMouseDown={props.onMouseDown}
                onTouchStart={props.onTouchStart}
                style={{
                  ...props.style,
                  height: '36px',
                  display: 'flex',
                  width: '100%'
                }}
              >
                <div
                  ref={props.ref}
                  style={{
                    height: '5px',
                    width: '100%',
                    borderRadius: '4px',
                    background: getTrackBackground({
                      values: this.state.values,
                      colors: ['#548BF4', '#ccc'],
                      min: this.state.min,
                      max: this.state.max
                    }),
                    alignSelf: 'center'
                  }}
                >
                  {children}
                </div>
              </div>
            )}
            renderThumb={({ props, isDragged }) => (
              <div
                {...props}
                style={{
                  ...props.style,
                  height: '42px',
                  width: '42px',
                  borderRadius: '4px',
                  backgroundColor: '#FFF',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  boxShadow: '0px 2px 6px #AAA'
                }}
              >
                <div
                  style={{
                    height: '16px',
                    width: '5px',
                    backgroundColor: isDragged ? '#548BF4' : '#CCC'
                  }}
                />
              </div>
            )}
          />
          <output style={{ marginTop: '30px' }} id="output">
            {this.state.values[0].toFixed(1)}
          </output>
        </div>
      </div>
    );
  }
}

export default filter;
