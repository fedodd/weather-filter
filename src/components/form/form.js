import React, { Component } from 'react';
import axios  from 'axios';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { geocodeByAddress, getLatLng, geocodeByPlaceId } from 'react-google-places-autocomplete';
// If you want to use the provided css
import 'react-google-places-autocomplete/dist/assets/index.css';
import './form.pcss';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';


const weatherbitKey = process.env.WEATHERBIT_KEY;

class form extends Component {

  state = {
    isReplay: false,
    placeholder: 'Город',
    autocompletionRequest: {
      language: 'ru',
      componentRestrictions: {
        country: 'ru'
      },
      types: ['(cities)'],
    },
  }

  onSubmit(event){
    event.preventDefault();

    //check if city is already added
    let checkCity = this.props.cities
      .find(city =>
        city.place_id === this.props.currentCity.place_id);

    if (checkCity === undefined) {
      this.props.addCity(this.props.currentCity);
    } else {
      //set message that city is already added
      this.setState({isReplay: true});
      setTimeout(() => {
        this.setState({isReplay: false});
      }, 3000);
    }
  }

  render() {

    return (
      <form className='form' onSubmit={e => this.onSubmit(e)}>
        <GooglePlacesAutocomplete
          onSelect={e => this.props.selectCity(e)}
          placeholder={this.state.placeholder}
          inputClassName="input with__border"
          autocompletionRequest={this.state.autocompletionRequest}
          renderSuggestions={(active, suggestions, onSelectSuggestion) => (
            <div className="suggestions-container">
              {
                suggestions.map((suggestion, index) => {
                  suggestion.description = suggestion.structured_formatting.main_text;
                  return (
                  <div
                    className={ index === active ? "suggestion is__active" :"suggestion"}
                    onClick={(event) => onSelectSuggestion(suggestion, event)}
                    key={suggestion.place_id}>
                    {suggestion.description}
                  </div>
                )})
              }
            </div>
          )}
        />
        <button
          type="submit"
          disabled={this.props.submitDisabled}
          className="submit">
          <span className="button  with__border"></span>
        </button>
        {this.state.isReplay ? <p className="form-message">Такой город уже есть. Выберите другой.</p> : null}
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    cities: state.cities,
    currentCity: state.currentCity,
    submitDisabled: state.submitDisabled
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addCity: (city) => dispatch(
      actions.addCityRequest(city)),
    selectCity: (city) => dispatch(
      actions.selectCityRequest(city)),
  }
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(form);
