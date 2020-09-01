import UserActionTypes from './user.types';
import { takeLatest, put, call } from 'redux-saga/effects';

import {
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  signUpSuccess,
  signUpFailure,
} from './user.actions';

import {
  auth,
  googleProvider,
  createUserProfileDocument,
  getCurrentUser,
} from '../../firebase/firebase';

import {
  getSnapshotFromUserAuth,
  googleSignIn,
  emailSignIn,
  userSession,
  signOut,
  signUp,
  signInOnSignUp,
  onStartSignUp,
  onSignUpSuccess,
  onStartGoogleSignIn,
  onStartEmailSignIn,
  onCheckUserSession,
  onStartSignOut,
} from './user.sagas';

describe('User sagas', () => {
  describe('on onStartSignUp saga', () => {
    it('should trigger on SIGN_UP_START', () => {
      const generator = onStartSignUp();

      expect(generator.next().value).toEqual(
        takeLatest(UserActionTypes.START_SIGN_UP, signUp)
      );
    });
  });

  describe('on onSignUpSuccess saga', () => {
    it('should trigger on SIGN_UP_SUCCESS', () => {
      const generator = onSignUpSuccess();

      expect(generator.next().value).toEqual(
        takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInOnSignUp)
      );
    });
  });

  describe('on onStartGoogleSignIn saga', () => {
    it('should trigger on START_GOOGLE_SIGN_IN', () => {
      const generator = onStartGoogleSignIn();

      expect(generator.next().value).toEqual(
        takeLatest(UserActionTypes.START_GOOGLE_SIGN_IN, googleSignIn)
      );
    });
  });

  describe('on onStartEmailSignIn saga', () => {
    it('should trigger on START_EMAIL_SIGN_IN', () => {
      const generator = onStartEmailSignIn();

      expect(generator.next().value).toEqual(
        takeLatest(UserActionTypes.START_EMAIL_SIGN_IN, emailSignIn)
      );
    });
  });

  describe('on onCheckUserSession saga', () => {
    it('should trigger on CHECK_USER_SESSION', () => {
      const generator = onCheckUserSession();

      expect(generator.next().value).toEqual(
        takeLatest(UserActionTypes.CHECK_USER_SESSION, userSession)
      );
    });
  });

  describe('on googleSignIn saga', () => {
    const generator = googleSignIn();

    it('should call auth.signInWithPopup with googleProvider', () => {
      const signInWithPopup = jest.spyOn(auth, 'signInWithPopup');

      generator.next();

      expect(signInWithPopup).toHaveBeenCalledWith(googleProvider);
    });
  });

  describe('on onStartSignOut saga', () => {
    it('should trigger on START_SIGN_OUT', () => {
      const generator = onStartSignOut();

      expect(generator.next().value).toEqual(
        takeLatest(UserActionTypes.START_SIGN_OUT, signOut)
      );
    });
  });

  describe('on signInOnSignUp saga', () => {
    it('should run getSnapshotFromUserAuth', () => {
      const mockUser = {};
      const mockAdditionalData = {};
      const mockAction = {
        payload: {
          user: mockUser,
          additionalData: mockAdditionalData,
        },
      };

      const generator = signInOnSignUp(mockAction);

      expect(generator.next().value).toEqual(
        getSnapshotFromUserAuth(mockUser, mockAdditionalData)
      );
    });
  });

  describe('on signUp saga', () => {
    const mockAction = {
      payload: {
        email: 'testuser@gmail.com',
        password: 'test123',
        displayName: 'Tester',
      },
    };
    const generator = signUp(mockAction);
    it('should call auth.createUserWithEmailAndPassword', () => {
      const createUserWithEmailAndPassword = jest.spyOn(
        auth,
        'createUserWithEmailAndPassword'
      );

      generator.next();

      expect(createUserWithEmailAndPassword).toHaveBeenCalled();
    });
  });

  describe('on signOut saga', () => {
    const generator = signOut();

    it('should call auth.signOut', () => {
      const expectSignOut = jest.spyOn(auth, 'signOut');
      generator.next();

      expect(expectSignOut).toHaveBeenCalled();
    });

    it('should call signOutSuccess', () => {
      expect(generator.next().value).toEqual(put(signOutSuccess()));
    });

    it('should call signOutFailure on error', () => {
      const newGenerator = signOut();
      newGenerator.next();

      expect(newGenerator.throw('error').value).toEqual(
        put(signOutFailure('error'))
      );
    });
  });

  describe('on userSession saga', () => {
    const generator = userSession();

    it('should call getCurrentUser', () => {
      expect(generator.next().value).toEqual(getCurrentUser());
    });

    it('should call getSnapshotFromUserAuth if userAuth exists', () => {
      const mockUserAuth = { uid: '1' };

      expect(generator.next(mockUserAuth).value).toEqual(
        getSnapshotFromUserAuth(mockUserAuth)
      );
    });

    it('should call signInFailure on error', () => {
      const newGenerator = userSession();
      newGenerator.next();

      expect(newGenerator.throw('error').value).toEqual(
        put(signInFailure('error'))
      );
    });
  });

  describe('on getSnapshotFromUserAuth saga', () => {
    it('get snapshot from userAuth', () => {
      const mockUserAuth = {};
      const mockAdditionalData = {};

      const generator = getSnapshotFromUserAuth(
        mockUserAuth,
        mockAdditionalData
      );

      expect(generator.next().value).toEqual(
        call(createUserProfileDocument, mockUserAuth, mockAdditionalData)
      );
    });
  });
});
