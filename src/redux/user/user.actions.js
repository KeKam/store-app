import UserActionTypes from './user.types';

export const startGoogleSignIn = () => ({
  type: UserActionTypes.START_GOOGLE_SIGN_IN
});

export const startEmailSignIn = emailAndPassword => ({
  type: UserActionTypes.START_EMAIL_SIGN_IN,
  payload: emailAndPassword
});

export const signInSuccess = user => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: user
});

export const signInFailure = error => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload: error
});
