import { CartActionTypes } from '../types/cart.types';

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

export const removeFromCart = item => {
  return {
    type: CartActionTypes.REMOVE_FROM_CART,
    payload: item
  };
};

export const removeItem = item => {
  return {
    type: CartActionTypes.REMOVE_ITEM,
    payload: item
  };
};
