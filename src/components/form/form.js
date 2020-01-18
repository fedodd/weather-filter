import React, { Component } from 'react';
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

  render() {

    return (
      <form className='form'>
        <div className="box">
          <GooglePlacesAutocomplete
          onSelect={event => console.log(event)}
          placeholder={this.state.placeholder}
          inputClassName="input"
          autocompletionRequest={this.state.autocompletionRequest}
          renderSuggestions={(active, suggestions, onSelectSuggestion) => (
            <div className="suggestions-container">
              {
                suggestions.map((suggestion) => {
                  let descr = suggestion.description.slice(0, suggestion.description.indexOf(','));
                  let updatedSugg = {
                    ...suggestion,
                    description: descr
                  }
                  return (
                  <div
                    className="suggestion"
                      onClick={(event) => onSelectSuggestion(updatedSugg, event)}
                  >
                    {descr}
                  </div>
                )})
              }
            </div>
          )}
        />
        </div>
        <div className="box">
          <button type="submit" className="submit">+</button>
        </div>


        {/* <Button className="button"/> */}
      </form>
    );
  }
}

export default form;
