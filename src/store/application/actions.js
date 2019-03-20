import { createAction } from 'helpers/redux';

import { EXAMPLE_STARTED } from './consts';

export const exampleAction = data => createAction(EXAMPLE_STARTED, data);
