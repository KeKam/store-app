import CollectionActionTypes from './collection.types';

export const startFetchCollection = () => ({
  type: CollectionActionTypes.START_FETCH_COLLECTION,
});

export const fetchCollectionSuccess = (collectionMap) => ({
  type: CollectionActionTypes.FETCH_COLLECTION_SUCCESS,
  payload: collectionMap,
});

export const fetchCollectionFailure = (error) => ({
  type: CollectionActionTypes.FETCH_COLLECTION_FAILURE,
  payload: error,
});
