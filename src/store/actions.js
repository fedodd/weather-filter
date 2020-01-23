// Action Creators

export const addCityRequest = (city) => {
  return {
    type: 'ADD_CITY_REQUEST',
    city
  }
};

export const addCitySuccess = (city) => {
  return {
    type: 'ADD_CITY_SUCCESS',
    city
  }
};

export const addCityError = (error) => {
  return {
    type: 'ADD_CITY_ERROR',
    error
  }
};

export const selectCityRequest = (city) => {
  return {
    type: 'SELECT_CITY_REQUEST',
    city
  }
};

export const selectCitySuccess = (city) => {
  return {
    type: 'SELECT_CITY_SUCCESS',
    city
  }
};

export const selectCityError = (error) => {
  return {
    type: 'SELECT_CITY_ERROR',
    error
  }
};



export const deleteCity = (city_name) => {
  return {
    type: 'DELETE_CITY',
    city_name
  }
};

export const filterCity = (temperature) => {
  return {
    type: 'FILTER_CITY',
    temperature
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
