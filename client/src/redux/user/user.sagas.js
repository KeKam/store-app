import { takeLatest, put, call, all } from 'redux-saga/effects';

import UserActionTypes from './user.types';
import {
  googleProvider,
  auth,
  createUserProfileDocument,
  getCurrentUser
} from '../../firebase/firebase';
import {
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  signUpSuccess,
  signUpFailure
} from './user.actions';

export function* getSnapshotFromUserAuth(userAuth, additionalData) {
  try {
    const userRef = yield call(
      createUserProfileDocument,
      userAuth,
      additionalData
    );
    const userSnapshot = yield userRef.get();
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
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

export function* userSession() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield getSnapshotFromUserAuth(userAuth);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error));
  }
}

export function* signUp({ payload: { displayName, email, password } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield put(signUpSuccess({ user, additionalData: { displayName } }));
  } catch (error) {
    yield put(signUpFailure(error));
  }
}

export function* signInOnSignUp({ payload: { user, additionalData } }) {
  yield getSnapshotFromUserAuth(user, additionalData);
}

export function* onStartSignUp() {
  yield takeLatest(UserActionTypes.START_SIGN_UP, signUp);
}

export function* onSignUpSuccess() {
  yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInOnSignUp);
}

export function* onStartGoogleSignIn() {
  yield takeLatest(UserActionTypes.START_GOOGLE_SIGN_IN, googleSignIn);
}

export function* onStartEmailSignIn() {
  yield takeLatest(UserActionTypes.START_EMAIL_SIGN_IN, emailSignIn);
}

export function* onCheckUserSession() {
  yield takeLatest(UserActionTypes.CHECK_USER_SESSION, userSession);
}

export function* onStartSignOut() {
  yield takeLatest(UserActionTypes.START_SIGN_OUT, signOut);
}

export function* userSagas() {
  yield all([
    call(onStartGoogleSignIn),
    call(onStartEmailSignIn),
    call(onCheckUserSession),
    call(onStartSignOut),
    call(onStartSignUp),
    call(onSignUpSuccess)
  ]);
}
