import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import userReducer from '../reducers/user/user.reducer';

const middlewares = [logger];

export default () => {
  const store = createStore(
    combineReducers({
      user: userReducer
    }),
    applyMiddleware(...middlewares)
  );

  return store;
};
