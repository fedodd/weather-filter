// Reducer
const initialState = {
  currentCity: {},
  cities: [
  ],
  submitDisabled: true
};


const reducer = (state = initialState, action) => {

  switch (action.type) {
    case 'SELECT_CITY_SUCCESS':
      return {
        ...state,
        submitDisabled: false,
        currentCity: action.city
      };
    case 'ADD_CITY_SUCCESS':
      let updatedcities = state.cities.concat(action.city);
      return {
        ...state,
        cities: updatedcities
      };
    case 'DELETE_CITY':
      let index = state.cities.findIndex(city =>
          city.city_name === action.city_name);

      let afterDeleteCities = [...state.cities];
      afterDeleteCities.splice(index, 1);
      return {
        ...state,
        cities: afterDeleteCities
      };
    case 'FILTER_CITY':
      // eslint-disable-next-line no-case-declarations
      let filteredCities = state.cities.map(city => {
        (city.temperature < action.temperature) ?
          city.isHide = true : city.isHide = false;
        return city;
      });
      return {
        ...state,
        filteredCities

      };
    default:
      return state;
  }
};


export default reducer;
