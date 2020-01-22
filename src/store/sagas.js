// Sagas

import {
  put,
  takeEvery,
  call
} from 'redux-saga/effects';
import {
  geocodeByAddress,
  getLatLng,
  geocodeByPlaceId
} from 'react-google-places-autocomplete';
import axios  from 'axios';

import * as actions from "./actions";
import "regenerator-runtime/runtime";

// sagas by course

export function* watchAddCity() {
  yield takeEvery('ADD_CITY', addCitySaga)
}

function* addCitySaga(action) {

  try {
    const apiData = yield axios.get('https://api.weatherbit.io/v2.0/current', {
        params: {
          lat: action.city.lat,
          lon: action.city.lng,
          key: '70b14df4c065478e8ab5dfeb04ed8c83'
        }
      })
    const data = apiData.data.data[0];
    let pressure = Math.round(data.pres * 0.750062);
    let city = {
      title: action.city.title,
      city_name: data.city_name,
      temperature: Math.round(data.temp),
      wind: Math.round(data.wind_spd),
      pressure: pressure,
      icon: data.weather.icon,
      isHide: false,
      place_id: action.city.place_id
    }
    yield put(actions.addCitySuccess(city))
  } catch (error) {
    yield put(actions.addCityError(error));
  }
}


export function* watchSelectCity(action) {
  yield takeEvery('SELECT_CITY', selectCitySaga)
}

function* selectCitySaga(action) {
  try {
    const geoCode = yield  geocodeByPlaceId(action.city.place_id);
    const title = geoCode[0].address_components[0].long_name
    const {lat, lng} = yield getLatLng(results[0]);

    yield put(actions.selectCitySuccess({
      lat, lng,
      title,
      place_id: action.city.place_id,
      country: action.city.structured_formatting.secondary_text
    }))
  } catch (error) {
    yield put(actions.selectCityError(error))
  }
}



// export function* watchcSelectCity() {
//   console.log('in watch');

//   yield takeEvery('INITIATE_AUTOCOMPLETE', addSelectSaga)
// }

// function* addSelectSaga(action) {
//   yield console.log('first yield in selet')
//   yield put(actions.fetchAutocomplete);
// }
