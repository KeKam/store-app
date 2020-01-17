import { takeLatest, put, call, all } from 'redux-saga/effects';

import {
  googleProvider,
  auth,
  createUserProfileDocument
} from '../../firebase/firebase';
import { signInSuccess, signInFailure } from './user.actions';
import { UserActionTypes } from './user.types';

export function* getSnapshotFromUserAuth(userAuth) {
  try {
    const userRef = yield call(createUserProfileDocument, userAuth);
    const userSnapshot = yield userRef.get();
    yield put(
      signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
    );
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* googleSignIn() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* emailSignIn({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* onStartGoogleSignIn() {
  yield takeLatest(UserActionTypes.START_GOOGLE_SIGN_IN, googleSignIn);
}

export function* onStartEmailSignIn() {
  yield takeLatest(UserActionTypes.START_EMAIL_SIGN_IN, emailSignIn);
}

export function* userSagas() {
  yield all([call(onStartGoogleSignIn), call(onStartEmailSignIn)]);
}
