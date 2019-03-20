import { call, put, takeLatest } from 'redux-saga/effects';

import { post } from 'helpers/axios';

import { EXAMPLE_FAILURE, EXAMPLE_STARTED, EXAMPLE_SUCCESS } from './consts';

function* exampleSaga({ payload }) {
  try {
    const request = yield call(post, 'endpoint', payload);
    yield put({ type: EXAMPLE_SUCCESS, payload: request });
  } catch (e) {
    yield put({ type: EXAMPLE_FAILURE, message: e.message });
  }
}

function* applicationSagas() {
  yield takeLatest(EXAMPLE_STARTED, exampleSaga);
}

export { exampleSaga, applicationSagas };
