import CartActionTypes from './cart.types';
import cartReducer from './cart.reducer';

const DEFAULT_STATE = {
  hidden: true,
  cartItems: [],
};

describe('cartReducer', () => {
  const mockItem = {
    id: 1,
    quantity: 2,
  };
  const mockPrevState = {
    hidden: true,
    cartItems: [mockItem, { id: 2, quantity: 1 }, { id: 3, quantity: 3 }],
  };

  it('should return the default state', () => {
    expect(cartReducer(undefined, {})).toEqual(DEFAULT_STATE);
  });

  it('should toggle hidden with toggleCart action', () => {
    expect(
      cartReducer(DEFAULT_STATE, { type: CartActionTypes.TOGGLE_CART }).hidden
    ).toBe(false);
  });

  it('should increase quantity of matching item by 1 if addToCart action fired with the same payload', () => {
    expect(
      cartReducer(mockPrevState, {
        type: CartActionTypes.ADD_TO_CART,
        payload: mockItem,
      }).cartItems[0].quantity
    ).toBe(3);
  });

  it('should decrease quantity of matching item by 1 if removeFromCart action fired with the same payload', () => {
    expect(
      cartReducer(mockPrevState, {
        type: CartActionTypes.REMOVE_FROM_CART,
        payload: mockItem,
      }).cartItems[0].quantity
    ).toBe(1);
  });

  it('should remove item from cart if removeItem action fired with paylod of existing item', () => {
    expect(
      cartReducer(mockPrevState, {
        type: CartActionTypes.REMOVE_ITEM,
        payload: mockItem,
      }).cartItems.includes((item) => item.id === 1)
    ).toBe(false);
  });

  it('should clear cart if clearClart action fired', () => {
    expect(
      cartReducer(mockPrevState, { type: CartActionTypes.CLEAR_CART }).cartItems
        .length
    ).toBe(0);
  });

  it('should get items from firebase when setCartFromFirebase action fired', () => {
    const mockDatabaseCart = [
      { id: 5, quantity: 3 },
      { id: 6, quantity: 1 },
      { id: 7, quantity: 2 },
    ];

    expect(
      cartReducer(DEFAULT_STATE, {
        type: CartActionTypes.SET_CART_FROM_FIREBASE,
        payload: mockDatabaseCart,
      }).cartItems.length
    ).toBe(3);
  });
});
