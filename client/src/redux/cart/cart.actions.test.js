import CartActionTypes from './cart.types';
import {
  toggleCart,
  addToCart,
  removeItem,
  removeFromCart,
  clearCart,
  setCartFromFirebase,
} from './cart.actions';

describe('Cart actions', () => {
  it('should create toggleCart action', () => {
    expect(toggleCart().type).toEqual(CartActionTypes.TOGGLE_CART);
  });

  it('should create addToCart action', () => {
    let mockItem = {
      id: 1,
    };

    const action = addToCart(mockItem);

    expect(action.type).toEqual(CartActionTypes.ADD_TO_CART);
    expect(action.payload).toEqual(mockItem);
  });

  it('should create removeFromCart action', () => {
    let mockItem = {
      id: 1,
    };

    const action = removeFromCart(mockItem);

    expect(action.type).toEqual(CartActionTypes.REMOVE_FROM_CART);
    expect(action.payload).toEqual(mockItem);
  });

  it('should create removeItem action', () => {
    let mockItem = {
      id: 1,
    };

    const action = removeItem(mockItem);

    expect(action.type).toEqual(CartActionTypes.REMOVE_ITEM);
    expect(action.payload).toEqual(mockItem);
  });

  it('should create clearCart action', () => {
    expect(clearCart().type).toEqual(CartActionTypes.CLEAR_CART);
  });

  it('should create setCartFromFirebase action', () => {
    const mockCartItems = [
      {
        id: 1,
      },
      {
        id: 2,
      },
    ];

    const action = setCartFromFirebase(mockCartItems);
    expect(action.type).toEqual(CartActionTypes.SET_CART_FROM_FIREBASE);
    expect(action.payload).toEqual(mockCartItems);
  });
});
