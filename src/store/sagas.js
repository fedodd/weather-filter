// Sagas

import { put, takeEvery, call } from 'redux-saga/effects'
import {
  geocodeByAddress,
  getLatLng,
  geocodeByPlaceId
} from 'react-google-places-autocomplete';

import * as actions from "./actions";
import "regenerator-runtime/runtime";

// export function* watchFetchAutocomplete() {
//   console.log('FETCHED_AUTOCOMPLETE', fetchAutocompleteAsync);

//   yield takeEvery('FETCHED_AUTOCOMPLETE', fetchAutocompleteAsync);
// }

// function * fetchAutocompleteAsync() {
//   try {
//     yield put(actions.requestAutocomplete());
//     const data = yield call(() => {
//       return fetch('https://dog.ceo/api/breeds/image/random')
//         .then(res => res.json())
//     });
//     yield put(actions.requestAutocompleteSuccess(data));
//   } catch (error) {
//     yield put(actions.requestAutocompleteError());
//   }
// }




// sagas by course

export function* watchAddCity() {
  console.log('in watch');

  yield takeEvery('addCity', addCitySaga)
}

function* addCitySaga(city) {

  let currentCity = {};

  yield geocodeByPlaceId(city.place_id)
    .then(results => {
      console.log('results', results);
      currentCity.title = results[0].address_components[0].long_name;
    })

  yield  {lat, lng}= getLatLng(results[0]);
    currentCity = {
      lat, lng,
      ...currentCity
    }
    console.log(currentCity);


  put(actions.fetchAutocomplete);
}

// export function* watchcSelectCity() {
//   console.log('in watch');

//   yield takeEvery('INITIATE_AUTOCOMPLETE', addSelectSaga)
// }

// function* addSelectSaga(action) {
//   yield console.log('first yield in selet')
//   yield put(actions.fetchAutocomplete);
// }
