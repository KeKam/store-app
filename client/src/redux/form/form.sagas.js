import { takeLatest, put, call, all } from 'redux-saga/effects';

import FormActionTypes from './form.types';
import { saveMessage } from '../../firebase/firebase';
import {
  sendFormSuccess,
  sendFormFailure,
  resetFormAfterSuccess,
} from './form.actions';

export const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export function* sendForm({ payload: { name, email, description } }) {
  try {
    yield saveMessage(name, email, description);
    yield put(sendFormSuccess({ name, email, description }));
  } catch (error) {
    yield put(sendFormFailure(error));
  }
}

export function* resetForm() {
  yield delay(3000);
  yield put(resetFormAfterSuccess());
}

export function* onStartSendForm() {
  yield takeLatest(FormActionTypes.START_SEND_FORM, sendForm);
}

export function* onSendFormSuccess() {
  yield takeLatest(FormActionTypes.SEND_FORM_SUCCESS, resetForm);
}

export function* formSagas() {
  yield all([call(onStartSendForm), call(onSendFormSuccess)]);
}
