// Sagas

import { put, takeEvery, call } from 'redux-saga/effects'
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

  yield takeEvery('INITIATE_AUTOCOMPLETE', addCitySaga)
}

function* addCitySaga(action) {
  console.log(action);

  yield console.log('first yield in addCity')
  yield put({
    type: 'FETCHED_AUTOCOMPLETE'
  });
}
