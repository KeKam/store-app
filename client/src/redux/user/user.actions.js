import UserActionTypes from './user.types';

export const startGoogleSignIn = () => ({
  type: UserActionTypes.START_GOOGLE_SIGN_IN,
});

export const startEmailSignIn = (emailAndPassword) => ({
  type: UserActionTypes.START_EMAIL_SIGN_IN,
  payload: emailAndPassword,
});

export const signInSuccess = (user) => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: user,
});

export const signInFailure = (error) => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload: error,
});

export const startSignOut = () => ({
  type: UserActionTypes.START_SIGN_OUT,
});

export const signOutSuccess = () => ({
  type: UserActionTypes.SIGN_OUT_SUCCESS,
});

export const signOutFailure = (error) => ({
  type: UserActionTypes.SIGN_OUT_FAILURE,
  payload: error,
});

export const startSignUp = (userCredentials) => ({
  type: UserActionTypes.START_SIGN_UP,
  payload: userCredentials,
});

export const signUpSuccess = ({ user, additionalData }) => ({
  type: UserActionTypes.SIGN_UP_SUCCESS,
  payload: { user, additionalData },
});

export const signUpFailure = (error) => ({
  type: UserActionTypes.SIGN_UP_FAILURE,
  payload: error,
});

export const checkUserSession = () => ({
  type: UserActionTypes.CHECK_USER_SESSION,
});
