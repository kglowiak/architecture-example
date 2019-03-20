import { all, fork } from 'redux-saga/effects';
import { applicationSagas } from './application/sagas';

const sagas = [applicationSagas];

function* rootSaga(services = {}) {
  yield all(sagas.map(saga => fork(saga, services)));
}

export { rootSaga };
