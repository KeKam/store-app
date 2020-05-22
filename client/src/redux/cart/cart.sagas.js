import { takeLatest, put, call, all, select } from 'redux-saga/effects';

import UserActionTypes from '../user/user.types';
import CartActionTypes from './cart.types';
import { getCurrentUserCart } from '../../firebase/firebase';
import { selectCurrentUser } from '../user/user.selectors';
import { selectCartItems, selectCartHidden } from './cart.selectors';
import { clearCart, setCartFromFirebase, toggleCart } from './cart.actions';

export function* clearCartOnSignOut() {
  const hidden = yield select(selectCartHidden);
  yield put(clearCart());

  if (!hidden) {
    yield put(toggleCart());
  }
}

export function* updateCartInFirebase() {
  const currentUser = yield select(selectCurrentUser);

  if (currentUser) {
    try {
      const cartRef = yield getCurrentUserCart(currentUser.id);
      const cartItems = yield select(selectCartItems);
      yield cartRef.update({ cartItems });
    } catch (error) {
      console.log(error);
    }
  }
}

export function* checkCartFromFirebase({ payload: user }) {
  const cartRef = yield getCurrentUserCart(user.id);
  const cartSnapshot = yield cartRef.get();
  yield put(setCartFromFirebase(cartSnapshot.data().cartItems));
}

export function* onSignInSuccess() {
  yield takeLatest(UserActionTypes.SIGN_IN_SUCCESS, checkCartFromFirebase);
}

export function* onSignOutSuccess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* onCartChange() {
  yield takeLatest(
    [
      CartActionTypes.ADD_TO_CART,
      CartActionTypes.REMOVE_FROM_CART,
      CartActionTypes.CLEAR_CART,
    ],
    updateCartInFirebase
  );
}

export function* cartSagas() {
  yield all([
    call(onSignInSuccess),
    call(onSignOutSuccess),
    call(onCartChange),
  ]);
}
