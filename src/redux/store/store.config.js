import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import userReducer from '../reducers/user/user.reducer';
import cartReducer from '../reducers/cart/cart.reducer';

const middlewares = [logger];

export default () => {
  const store = createStore(
    combineReducers({
      user: userReducer,
      cart: cartReducer
    }),
    applyMiddleware(...middlewares)
  );

  return store;
};
