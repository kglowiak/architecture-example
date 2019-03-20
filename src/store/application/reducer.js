import { EXAMPLE_SUCCESS, EXAMPLE_FAILURE } from './consts';

export const initialState = {};

const applicationReducer = (state = initialState, action) => {
  switch (action.type) {
    case EXAMPLE_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case EXAMPLE_FAILURE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export { applicationReducer };
