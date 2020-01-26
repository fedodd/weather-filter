// add city
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

//select city
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

//delete city
export const deleteCity = (place_id) => {
  return {
    type: 'DELETE_CITY',
    place_id
  }
};

//filter city
export const filterCity = (temperature) => {
  return {
    type: 'FILTER_CITY',
    temperature
  }
};
