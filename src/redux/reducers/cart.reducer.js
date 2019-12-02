import { CartActionTypes } from '../types/cart.types';
import { addItemToCart } from '../utils/cart.utils';

const DEFAULT_STATE = {
  hidden: true,
  cartItems: []
};

const cartReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART:
      return {
        ...state,
        hidden: !state.hidden
      };
    case CartActionTypes.ADD_TO_CART:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };
    default:
      return state;
  }
};

export default cartReducer;
