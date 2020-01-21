import React, { Component } from 'react';
import axios  from 'axios';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { geocodeByAddress, getLatLng, geocodeByPlaceId } from 'react-google-places-autocomplete';
// If you want to use the provided css
import 'react-google-places-autocomplete/dist/assets/index.css';
import Button from "../button/button";
import './form.pcss';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';

class form extends Component {
  state = {
    placeholder: 'Воронеж',
    autocompletionRequest: {
      componentRestrictions: {
        country: 'ru'
      },
      types: ['(cities)'],
    },
    currentCity: {
      lat: null,
      lng: null,
      title: null,
      place_id: null
    },
    weather: null
  }

  onSelectCity(event) {
    //выбрав город сразу запрашиваем его координаты, еще до добавления в дэшборд
    geocodeByPlaceId(event.place_id)
      .then(results => {
        return getLatLng(results[0])})
      .then(({ lat, lng }) =>
        this.setState({
          currentCity: {
            lat, lng,
            title: event.structured_formatting.main_text,
            id: event.place_id,
            country: event.structured_formatting.secondary_text
          }
        })
      );


  }

  onSubmit(event){

    event.preventDefault();

    axios.get('https://api.weatherbit.io/v2.0/current', {
        params: {
          lat: this.state.currentCity.lat,
          lon: this.state.currentCity.lng,
          key: '70b14df4c065478e8ab5dfeb04ed8c83'
        }
      })
      .then(response => {

        let data = response.data.data[0];
        // convert to mm Hg
        let pressure = Math.round(data.pres * 0.750062);

        let city = {
          title: this.state.currentCity.title,
          city_name: data.city_name,
          temperature: Math.round(data.temp),
          wind: Math.round(data.wind_spd),
          pressure: pressure,
          icon: data.weather.icon,
          isHide: false
        }

        this.props.addCity(city);

      })
      .catch(error => {
        console.log(error);
      })
  }

  render() {

    return (
      <form className='form' onSubmit={e => this.onSubmit(e)}>
        <GooglePlacesAutocomplete
          onSelect={event => this.onSelectCity(event)}
          placeholder={this.state.placeholder}
          inputClassName="input with__border"
          autocompletionRequest={this.state.autocompletionRequest}
          renderSuggestions={(active, suggestions, onSelectSuggestion) => (
            <div className="suggestions-container">
              {
                suggestions.map((suggestion) => {
                  suggestion.descripiton = suggestion.structured_formatting.main_text;

                  return (
                  <div className="suggestion" onClick={(event) => onSelectSuggestion(suggestion, event)}>
                    {suggestion.structured_formatting.main_text}
                  </div>
                )})
              }
            </div>
          )}
        />
        <button
          type="submit"
          className="submit">
          <span className="button  with__border"></span>
        </button>
      </form>
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
    addCity: (city) => dispatch(
      actions.addCity(city))
  };
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(form);