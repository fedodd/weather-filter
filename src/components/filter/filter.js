import React, { Component } from 'react';
import { Range, getTrackBackground } from 'react-range';
import { connect } from 'react-redux';
import './filter.pcss';
import * as actions from '../../store/actions';

class filter extends Component {
  state = {
    values: [0],
    finalValues: [10],
    step: 1,
    min: -30,
    max: 40
  };

  componentDidMount() {
    console.log('chenaged?');

    //this.setState({values: [this.props.temperature]})
  }

  onChange = (values) => {
    this.setState({ values });
    let temperature = values[0];
    this.props.filterCity(temperature);
  }

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
            onChange={values => this.onChange(values)}
            renderTrack={({ props, children }) => (
              <div
                onMouseDown={props.onMouseDown}
                onTouchStart={props.onTouchStart}
                style={{
                  ...props.style,
                  height: '20px',
                  display: 'flex',
                  width: '100%'
                }}
              ><span></span>
                <div
                  ref={props.ref}
                  style={{
                    height: '3px',
                    width: '100%',
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
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  border: '1px solid white',
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
    cities: state.cities
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
