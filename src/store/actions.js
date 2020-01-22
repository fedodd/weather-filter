// Action Creators

export const addCity = (city) => {
  return {
    type: 'ADD_CITY',
    city: city
  }
};

export const deleteCity = (city_name) => {
  return {
    type: 'DELETE_CITY',
    city_name: city_name
  }
};

export const filterCity = (temperature) => {
  return {
    type: 'FILTER_CITY',
    temperature: temperature
  }
};



export const requestWeather = () => {
  return { type: 'REQUESTED_Weather' }
};


export const requestWeatherSuccess = (data) => {
  return {
    type: 'REQUESTED_WEATHER_SUCCEEDED',
    url: data.message
  }
};

export const requestWeatherError = (city) => {

  return {
    type: 'REQUEST_WEATHER_ERROR'
  }
};


export const initiateAutocomplete = () => {
  console.log('InitiateAutocomplete');

  return { type: 'INITIATE_AUTOCOMPLETE' }
};

export const requestAutocomplete = () => {
  console.log('requestAutocomplete');

  return { type: 'REQUESTED_AUTOCOMPLETE' }
};

export const requestAutocompleteSuccess = (data) => {
  console.log('requestAutocompleteSuccess');
  return {
    type: 'REQUESTED_AUTOCOMPLETE_SUCCEEDED',
    url: data.message
  }
};

export const requestAutocompleteError = (city) => {
  console.log('requestAutocompleteError');
  return {
    type: 'REQUEST_AUTOCOMPLETE_ERROR'
  }
};

export const fetchAutocomplete = () => {
  console.log('fetchAutocomplet');
  return { type: 'FETCHED_AUTOCOMPLETE' }
};
