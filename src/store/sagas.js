// Sagas

import { put, takeEvery, call } from 'redux-saga/effects'
import * as actions from "./actions";
import "regenerator-runtime/runtime";

export function* watchFetchDog() {
  yield takeEvery('FETCHED_DOG', fetchDogAsync);
}

function* fetchDogAsync() {
  try {
    yield put(actions.requestDog());
    const data = yield call(() => {
      return fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
    });
    yield put(actions.requestDogSuccess(data));
  } catch (error) {
    yield put(actions.requestDogError());
  }
}
