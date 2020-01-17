import { takeLatest, call, put, all } from 'redux-saga/effects';

import {
  firestore,
  convertCollectionSnapshotToMap
} from '../../firebase/firebase';
import {
  fetchCollectionSuccess,
  fetchCollectionFailure
} from './collection.actions';
import { CollectionActionTypes } from './collection.types';

export function* fetchCollection() {
  try {
    const collectionRef = firestore.collection('collection');
    const snapshot = yield collectionRef.get();
    const collectionMap = yield call(convertCollectionSnapshotToMap, snapshot);
    yield put(fetchCollectionSuccess(collectionMap));
  } catch (error) {
    yield put(fetchCollectionFailure(error.message));
  }
}

export function* onStartFetchCollection() {
  yield takeLatest(
    CollectionActionTypes.START_FETCH_COLLECTION,
    fetchCollection
  );
}

export function* collectionSagas() {
  yield all([call(onStartFetchCollection)]);
}
