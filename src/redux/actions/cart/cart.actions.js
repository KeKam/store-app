import { CartActionTypes } from '../../types/cart.types';

export const toggleCart = () => {
  return {
    type: CartActionTypes.TOGGLE_CART
  };
};

export const addToCart = item => {
  return {
    type: CartActionTypes.ADD_TO_CART,
    payload: item
  };
};
