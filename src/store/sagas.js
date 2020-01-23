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

// saga add city

export function* watchAddCity() {
  yield takeEvery('ADD_CITY_REQUEST', addCitySaga)
}

function* addCitySaga(action) {

  try {
    const apiData = yield axios.get('https://api.weatherbit.io/v2.0/current', {
        params: {
          lat: action.city.lat,
          lon: action.city.lng,
          key: process.env.WEATHERBIT_KEY
        }
      })
    const data = apiData.data.data[0];

    //convert pressure to russian mmHg
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

// saga select city

export function* watchSelectCity(action) {
  yield takeEvery('SELECT_CITY_REQUEST', selectCitySaga)
}

function* selectCitySaga(action) {

  try {
    const geoCode = yield geocodeByPlaceId(action.city.place_id);
    const title = geoCode[0].address_components[0].long_name
    const {lat, lng} = yield getLatLng(geoCode[0]);
    const city = {
      lat,
      lng,
      title,
      place_id: action.city.place_id,
      country: action.city.structured_formatting.secondary_text
    };

    yield put(actions.selectCitySuccess(city))
  } catch (error) {
    yield put(actions.selectCityError(error))
  }
}
