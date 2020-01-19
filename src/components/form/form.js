import React, { Component } from 'react';
import axios  from 'axios';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

// If you want to use the provided css
import 'react-google-places-autocomplete/dist/assets/index.css';
import Button from "../button/button";
import './form.css';

class form extends Component {
  state = {
    placeholder: 'Воронеж',
    autocompletionRequest: {
      componentRestrictions: {
        country: 'ru'
      },
       types: ['(cities)'],
    }
  }

  onSelectCity(event) {
    console.log('a am here');

    axios.get('/http://api.weatherbit.io/v2.0/current?city=London&key=70b14df4c065478e8ab5dfeb04ed8c83', {

      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }

  render() {

    return (
      <form className='form'>
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
        <button type="submit" className="submit"><span className="button  with__border"></span></button>
      </form>
    );
  }
}

export default form;
