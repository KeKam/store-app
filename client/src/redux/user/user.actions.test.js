import UserActionTypes from './user.types';
import {
  startGoogleSignIn,
  startEmailSignIn,
  signInSuccess,
  signInFailure,
  startSignOut,
  signOutSuccess,
  signOutFailure,
  startSignUp,
  signUpSuccess,
  signUpFailure,
  checkUserSession,
} from './user.actions';

describe('User actions', () => {
  it('should create startGoogleSignIn action', () => {
    expect(startGoogleSignIn().type).toEqual(
      UserActionTypes.START_GOOGLE_SIGN_IN
    );
  });

  it('should create startEmailSignIn action', () => {
    const mockCredentials = {
      email: 'testuser@gmail.com',
      password: 'tester123',
    };

    const action = startEmailSignIn(mockCredentials);

    expect(action.type).toEqual(UserActionTypes.START_EMAIL_SIGN_IN);
    expect(action.payload).toEqual(mockCredentials);
  });

  it('should create signInSuccess action', () => {
    const mockUser = {
      displayName: 'Tester',
      email: 'testuser@gmail.com',
      id: '1',
    };

    const action = signInSuccess(mockUser);

    expect(action.type).toEqual(UserActionTypes.SIGN_IN_SUCCESS);
    expect(action.payload).toEqual(mockUser);
  });

  it('should create signInFailure action', () => {
    const mockError = {
      error: 'errored',
    };

    const action = signInFailure(mockError);

    expect(action.type).toEqual(UserActionTypes.SIGN_IN_FAILURE);
    expect(action.payload).toEqual(mockError);
  });

  it('should create startSignOut action', () => {
    expect(startSignOut().type).toEqual(UserActionTypes.START_SIGN_OUT);
  });

  it('should create signOutSuccess action', () => {
    expect(signOutSuccess().type).toEqual(UserActionTypes.SIGN_OUT_SUCCESS);
  });

  it('should create signOutFailure action', () => {
    const mockError = {
      error: 'errored',
    };

    const action = signOutFailure(mockError);

    expect(action.type).toEqual(UserActionTypes.SIGN_OUT_FAILURE);
    expect(action.payload).toEqual(mockError);
  });

  it('should create startSignUp action', () => {
    const mockUserInformation = {
      displayName: 'Tester',
      email: 'testuser@gmail.com',
      password: 'test123',
      confirmPassword: 'test123',
    };

    const action = startSignUp(mockUserInformation);

    expect(action.type).toEqual(UserActionTypes.START_SIGN_UP);
    expect(action.payload).toEqual(mockUserInformation);
  });

  it('should create signUpSuccess action', () => {
    const mockUser = {
      user: {
        displayName: null,
        email: 'testuser@gmail.com',
      },
      additionalData: { displayName: 'Tester' },
    };

    const { user, additionalData } = mockUser;
    const action = signUpSuccess({ user, additionalData });

    expect(action.type).toEqual(UserActionTypes.SIGN_UP_SUCCESS);
    expect(action.payload).toEqual({ user, additionalData });
  });

  it('should create signUpFailure action', () => {
    const mockError = {
      error: 'errored',
    };

    const action = signUpFailure(mockError);

    expect(action.type).toEqual(UserActionTypes.SIGN_UP_FAILURE);
    expect(action.payload).toEqual(mockError);
  });

  it('should create checkUserSession action', () => {
    expect(checkUserSession().type).toEqual(UserActionTypes.CHECK_USER_SESSION);
  });
});
