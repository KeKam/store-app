import UserActionTypes from './user.types';
import userReducer from './user.reducer';

const DEFAULT_STATE = {
  currentUser: null,
  error: null,
};

describe('userReducer', () => {
  it('should return default state', () => {
    expect(userReducer(undefined, {})).toEqual(DEFAULT_STATE);
  });

  it('should set currentUser to payload and error to null if signInSuccess', () => {
    const mockUser = { id: 1, displayName: 'Tester' };

    expect(
      userReducer(DEFAULT_STATE, {
        type: UserActionTypes.SIGN_IN_SUCCESS,
        payload: mockUser,
      })
    ).toEqual({ ...DEFAULT_STATE, currentUser: mockUser, error: null });
  });

  it('should set currentUser and error to null if signOutSuccess', () => {
    expect(
      userReducer(DEFAULT_STATE, { type: UserActionTypes.SIGN_OUT_SUCCESS })
    ).toEqual({ ...DEFAULT_STATE, currentUser: null, error: null });
  });

  it('should set error to payload if signInFailure, signUpFailure or signOutFailure', () => {
    const mockError = {
      error: 'errored',
    };

    expect(
      userReducer(DEFAULT_STATE, {
        type: UserActionTypes.SIGN_IN_FAILURE,
        payload: mockError,
      }).error
    ).toBe(mockError);

    expect(
      userReducer(DEFAULT_STATE, {
        type: UserActionTypes.SIGN_UP_FAILURE,
        payload: mockError,
      }).error
    ).toBe(mockError);

    expect(
      userReducer(DEFAULT_STATE, {
        type: UserActionTypes.SIGN_OUT_FAILURE,
        payload: mockError,
      }).error
    ).toBe(mockError);
  });
});
