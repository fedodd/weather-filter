// Action Creators

export const addCity = (city) => {
  return {
    type: 'ADD_CITY',
    city: city
  }
};


export const updateData = (cities) => {
  return {
    type: 'UPDATE_DATA',
    cities: cities
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
