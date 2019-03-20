const createAction = (type, payload) => ({ type, payload });
const createSimpleAction = type => ({ type });

export { createAction, createSimpleAction };
