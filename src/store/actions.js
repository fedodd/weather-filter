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

export const DeleteCity = (city) => {
  return {
    type: 'DELETE_CITY',
    city: city
  }
};

export const FilterCity = (temperature) => {
  return {
    type: 'FILTER_CITY',
    temperature: temperature
  }
};
