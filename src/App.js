import React, { Component } from 'react';
import './App.css';
import dashbord from "./components/dashbord/dashbord";
import filter from "./components/filter/filter";
import form from "./components/form/form";

import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
// If you want to use the provided css
import 'react-google-places-autocomplete/dist/assets/index.css';



class App extends Component {

  state = {
    autocompletionRequest: {
      componentRestrictions: {
        country: 'ru'
      },
      AutocompletePrediction: {
        description: 'true'
      },
       types: ['(cities)'],
    }
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Маябрь</h1>
        </header>
        <div>
          <GooglePlacesAutocomplete
            onSelect={event => console.log(event)}
            placeholder="Воронеж"
            // inputClassName="input"
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
      </div>
    );
  }
}

export default App;
