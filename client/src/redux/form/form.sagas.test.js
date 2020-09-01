import { takeLatest, put } from 'redux-saga/effects';

import {
  sendFormSuccess,
  sendFormFailure,
  resetFormAfterSuccess,
} from './form.actions';

import {
  sendForm,
  resetForm,
  onStartSendForm,
  onSendFormSuccess,
  delay,
} from './form.sagas';

import { saveMessage } from '../../firebase/firebase';

import FormActionTypes from './form.types';

describe('Form sagas', () => {
  describe('on onStartSendForm saga', () => {
    it('should trigger on START_SEND_FORM', () => {
      const generator = onStartSendForm();

      expect(generator.next().value).toEqual(
        takeLatest(FormActionTypes.START_SEND_FORM, sendForm)
      );
    });
  });

  describe('on onSendFormSuccess saga', () => {
    it('should trigger on SEND_FORM_SUCCESS', () => {
      const generator = onSendFormSuccess();

      expect(generator.next().value).toEqual(
        takeLatest(FormActionTypes.SEND_FORM_SUCCESS, resetForm)
      );
    });
  });

  describe('on sendForm saga', () => {
    const mockName = 'Tester';
    const mockEmail = 'testuser@gmail.com';
    const mockDescription = 'Testing message';

    const mockAction = {
      payload: {
        email: mockEmail,
        name: mockName,
        description: mockDescription,
      },
    };

    const generator = sendForm(mockAction);

    it('should call saveMessage', () => {
      expect(generator.next().value).toEqual(
        saveMessage(mockName, mockEmail, mockDescription)
      );
    });

    it('should call sendFormSuccess', () => {
      const mockForm = {
        name: mockName,
        email: mockEmail,
        description: mockDescription,
      };

      expect(generator.next().value).toEqual(put(sendFormSuccess(mockForm)));
    });

    it('should call sendFormFailure on error', () => {
      const newGenerator = sendForm(mockAction);
      newGenerator.next();

      expect(newGenerator.throw('error').value).toEqual(
        put(sendFormFailure('error'))
      );
    });
  });

  describe('on resetForm saga', () => {
    const generator = resetForm();

    it('should call delay', () => {
      expect(generator.next().value).toEqual(delay(3000));
    });

    it('should all resetFormAfterSuccess', () => {
      expect(generator.next().value).toEqual(put(resetFormAfterSuccess()));
    });
  });
});
