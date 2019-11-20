import { CartActionTypes } from '../../types/cart.types';

const DEFAULT_STATE = {
  hidden: true
};

const cartReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART:
      return {
        ...state,
        hidden: !state.hidden
      };
    default:
      return state;
  }
};

export default cartReducer;
