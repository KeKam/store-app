import CartActionTypes from './cart.types';

export const toggleCart = () => ({
  type: CartActionTypes.TOGGLE_CART
});

export const addToCart = item => ({
  type: CartActionTypes.ADD_TO_CART,
  payload: item
});

export const removeFromCart = item => ({
  type: CartActionTypes.REMOVE_FROM_CART,
  payload: item
});

export const removeItem = item => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item
});

export const clearCart = () => ({
  type: CartActionTypes.CLEAR_CART
});

export const setCartFromFirebase = cartItems => ({
  type: CartActionTypes.SET_CART_FROM_FIREBASE,
  payload: cartItems
});
