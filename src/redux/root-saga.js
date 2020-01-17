import { all, call } from 'redux-saga/effects';

import { onStartFetchCollection } from './collection/collection.sagas';
import { userSagas } from './user/user.sagas';

export default function* rootSaga() {
  yield all([call(onStartFetchCollection), call(userSagas)]);
}
