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


const weatherbitKey = process.env.WEATHERBIT_KEY;

class form extends Component {

  constructor(props) {
    super(props);
    // создадим реф в поле `textInput` для хранения DOM-элемента
    this.textInput = React.createRef();
  }


  state = {
    submitDisabled: true,
    isReplay: false,
    placeholder: 'Город',
    autocompletionRequest: {
      language: 'ru',
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

    let city_name = event.structured_formatting.main_text;


    geocodeByPlaceId(event.place_id)
      .then(results => {
        console.log('results', results);
        city_name = results[0].address_components[0].long_name;
        return getLatLng(results[0])
      })
        .then(({ lat, lng }) =>
          this.setState({
            submitDisabled: false,
            currentCity: {
              lat, lng,
              title: city_name,
              place_id: event.place_id,
              country: event.structured_formatting.secondary_text
            }
          })
        );

  }

  onSubmit(event){

    event.preventDefault();

    let checkCity = this.props.cities
      .find(city =>
        city.place_id === this.state.currentCity.place_id);

    if (checkCity !== undefined) {
      this.setState({isReplay: true});
      setTimeout(() => {
        this.setState({isReplay: false});
      }, 3000);
      return null;
    }
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
          isHide: false,
          place_id: this.state.currentCity.place_id
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
                suggestions.map((suggestion, index) => {
                  suggestion.description = suggestion.structured_formatting.main_text;
                  return (
                  <div
                    onKeyDown={event => console.log(event)}
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
          disabled={this.state.submitDisabled}
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
    cities: state.cities
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addCity: (city) => dispatch(
      actions.addCity(city)),
    fetchAutocomplete: () => dispatch(FetchAutocomplete())
  };
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(form);
