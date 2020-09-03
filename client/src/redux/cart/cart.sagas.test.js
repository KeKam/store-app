import { takeLatest, put, select } from 'redux-saga/effects';

import UserActionTypes from '../user/user.types';
import CartActionTypes from './cart.types';
import {
  clearCartOnSignOut,
  checkCartFromFirebase,
  updateCartInFirebase,
  onSignOutSuccess,
  onSignInSuccess,
  onCartChange,
} from './cart.sagas';

import { selectCurrentUser } from '../user/user.selectors';
import { selectCartItems, selectCartHidden } from './cart.selectors';
import { clearCart, toggleCart, setCartFromFirebase } from './cart.actions';
import { getCurrentUserCart } from '../../firebase/firebase';

describe('Cart sagas', () => {
  describe('on onSignOutSuccess saga', () => {
    it('should trigger on SIGN_OUT_SUCCESS', () => {
      const generator = onSignOutSuccess();

      expect(generator.next().value).toEqual(
        takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut)
      );
    });
  });

  describe('on onSignInSuccess saga', () => {
    it('should trigger on SIGN_IN_SUCCESS', () => {
      const generator = onSignInSuccess();

      expect(generator.next().value).toEqual(
        takeLatest(UserActionTypes.SIGN_IN_SUCCESS, checkCartFromFirebase)
      );
    });
  });

  describe('on onCartChange saga', () => {
    it('should trigger on cart change', () => {
      const generator = onCartChange();

      expect(generator.next().value).toEqual(
        takeLatest(
          [
            CartActionTypes.ADD_TO_CART,
            CartActionTypes.REMOVE_FROM_CART,
            CartActionTypes.CLEAR_CART,
          ],
          updateCartInFirebase
        )
      );
    });
  });

  describe('on clearCartOnSignOut saga', () => {
    const generator = clearCartOnSignOut();

    it('should select selectCartHidden', () => {
      expect(generator.next().value).toEqual(select(selectCartHidden));
    });

    it('should call clearCart', () => {
      expect(generator.next().value).toEqual(put(clearCart()));
    });

    it('should call toggleCart', () => {
      expect(generator.next().value).toEqual(put(toggleCart()));
    });
  });

  describe('on updateCartInFirebase saga', () => {
    const generator = updateCartInFirebase();

    it('should select selectCurrentUser', () => {
      expect(generator.next().value).toEqual(select(selectCurrentUser));
    });
  });

  describe('on checkCartFromFirebase saga', () => {
    const mockAction = {
      payload: {
        displayName: 'Tester',
        email: 'testuser@gmail.com',
        id: '1',
      },
    };

    const generator = checkCartFromFirebase(mockAction);

    it('should call getCurrentUserCart', () => {
      expect(generator.next(mockAction.payload.id).value).toEqual(
        getCurrentUserCart(mockAction.payload.id)
      );
    });
  });
});
