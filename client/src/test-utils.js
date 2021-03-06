import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './redux/root-reducer';

const render = (component, { initialState } = {}) => {
  const actions = [];
  const observerMiddleware = () => (next) => (action) => {
    actions.push(action);
    return next(action);
  };
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(observerMiddleware)
  );
  const utils = {
    dispatch: (action) => {
      return store.dispatch(action);
    },
    getDispatchedActions: () => {
      return actions;
    },
    getState: () => {
      return store.getState();
    },
    rerenderWithRedux: (component) => render(component, { initialState }),
  };
  return {
    ...rtlRender(<Provider store={store}>{component}</Provider>),
    ...utils,
  };
};

// re-export everything
export * from '@testing-library/react';

// override render method
export { render };
