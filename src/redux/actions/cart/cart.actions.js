import { CartActionTypes } from '../../types/cart.types';

export const toggleCart = () => {
  return {
    type: CartActionTypes.TOGGLE_CART
  };
};
