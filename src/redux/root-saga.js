import { all, call } from 'redux-saga/effects';

import { onStartFetchCollection } from './collection/collection.sagas';

export default function* rootSaga() {
  yield all([call(onStartFetchCollection)]);
}
