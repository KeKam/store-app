import { takeLatest, put, call, all } from 'redux-saga/effects';

import FormActionTypes from './form.types';
import { saveMessage } from '../../firebase/firebase';
import { sendFormSuccess, sendFormFailure } from './form.actions';

export function* sendForm({ payload: { name, email, description } }) {
  try {
    yield saveMessage(name, email, description);
    yield put(sendFormSuccess({ name, email, description }));
  } catch (error) {
    yield put(sendFormFailure(error));
  }
}

export function* onStartSendForm() {
  yield takeLatest(FormActionTypes.START_SEND_FORM, sendForm);
}

export function* formSagas() {
  yield all([call(onStartSendForm)]);
}
