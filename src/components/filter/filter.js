import React, { Component } from 'react';
import { Range, getTrackBackground } from 'react-range';
import { connect } from 'react-redux';
import './filter.pcss';
import * as actions from '../../store/actions';

class filter extends Component {
  state = {
    values: [0],
    step: 1,
    min: -40,
    max: 40
  };

  onChange = (values) => {
    this.setState({ values });
    let temperature = values[0];
  }

  render() {
    return (
      <div className="filter">
        <h2>Где сейчас теплее чем</h2>
        <div className="filter-wrapper">
          <Range
            values={this.state.values}
            step={this.state.step}
            min={this.state.min}
            max={this.state.max}
            onChange={values => this.onChange(values)}
            renderTrack={({ props, children }) => (
              <div
                className='filter-box'
                onMouseDown={props.onMouseDown}
                onTouchStart={props.onTouchStart}

              ><span></span>
                <div
                  className='filter-track'
                  ref={props.ref}
                  style={{

                    background: getTrackBackground({
                      values: this.state.values,
                      colors: ['var(--color_light)', 'var(--color_dark)'],
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
                className="thumb"
                {...props}
                style={{
                  ...props.style,
                  height: isDragged ? '20px' :'16px',
                  width: isDragged ? '10px' : '8px',
                  borderRadius: isDragged ? '6px' : '5px',
                  backgroundColor: isDragged ?  'var(--color_active)': 'var(--color_dark)',
                  outlineColor: isDragged ?  'transparent': 'var(--color_dark)'
                }}
              >
              </div>
            )}
          />
          <output id="output">
            {this.state.values[0]} &#176;C
          </output>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cities: state.cities,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    filterCity: (temperature) => dispatch(
      actions.filterCity(temperature))
  };
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(filter);
