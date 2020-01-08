import { CollectionActionTypes } from '../types/collection.types';
import {
  firestore,
  convertCollectionSnapshotToMap
} from '../../firebase/firebase';

export const startFetchCollection = () => ({
  type: CollectionActionTypes.START_FETCH_COLLECTION
});

export const fetchCollectionSuccess = collectionMap => ({
  type: CollectionActionTypes.FETCH_COLLECTION_SUCCESS,
  payload: collectionMap
});

export const fetchCollectionFailure = error => ({
  type: CollectionActionTypes.FETCH_COLLECTION_FAILURE,
  payload: error
});

export const startAsyncFetchCollection = () => {
  return async dispatch => {
    const collectionRef = firestore.collection('collection');
    dispatch(startFetchCollection());

    try {
      const response = await collectionRef.get();
      const collectionMap = convertCollectionSnapshotToMap(response);
      dispatch(fetchCollectionSuccess(collectionMap));
    } catch (error) {
      dispatch(fetchCollectionFailure(error));
    }
  };
};
