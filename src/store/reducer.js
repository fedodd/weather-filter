// Reducer
const initialState = {
  temperature: 0,
  cities: [
  ],
};


const reducer = (state = initialState, action) => {

  switch (action.type) {
    case 'ADD_CITY':
      // eslint-disable-next-line no-case-declarations
      let updatedcities = state.cities.concat(action.city);
      return {
        ...state,
        cities: updatedcities
      };
    case 'DELETE_CITY':
      // eslint-disable-next-line no-case-declarations
      let index = state.cities.findIndex(city =>
          city.city_name === action.city.city_name);
      // eslint-disable-next-line no-case-declarations
      let afterDeleteCities = state.cities.slice(1, index + 1);
      return {
        ...state,
        cities: afterDeleteCities
      };
    case 'FILTER_CITY':
      // eslint-disable-next-line no-case-declarations
      let filteredCities = state.cities.map(city => {
        (city.temperature < action.temperature) ?
          city.isHide = true : city.isHide = false;
      })
    return {
      ...state,
      cities: filteredCities
    };
    default:
      return state;
  }
};


export default reducer;
