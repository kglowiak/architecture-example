import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import { applicationReducer } from './application/reducer';

const reducers = {
  form,
  application: applicationReducer,
};

const rootReducer = combineReducers(reducers);

export { rootReducer };
