// Reducer
const initialState = {
  temperature: 0,
  currentCity: {},
  cities: [
  ],
};


const reducer = (state = initialState, action) => {

  switch (action.type) {
    // case 'ADD_CITY':
    //   // eslint-disable-next-line no-case-declarations
    //   let updatedcities = state.cities.concat(action.city);
    //   return {
    //     ...state,
    //     cities: updatedcities
    //   };
    case 'SELECT_CITY_SUCCESS':
      // eslint-disable-next-line no-case-declarations
      return {
        ...state,
        currentCity: action.city
      };
    case 'ADD_CITY_SUCCESS':
      // eslint-disable-next-line no-case-declarations
      let updatedcities = state.cities.concat(action.city);
      return {
        ...state,
        cities: updatedcities
      };
    case 'DELETE_CITY':
      // eslint-disable-next-line no-case-declarations
      let index = state.cities.findIndex(city =>
          city.city_name === action.city_name);

      // eslint-disable-next-line no-case-declarations


      let afterDeleteCities = [...state.cities];
      afterDeleteCities.splice(index, 1);
      console.log(state.cities, afterDeleteCities);
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
