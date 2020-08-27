import CollectionActionTypes from './collection.types';
import {
  startFetchCollection,
  fetchCollectionSuccess,
  fetchCollectionFailure,
} from './collection.actions';

describe('Collection actions', () => {
  it('should create startFetchCollection action', () => {
    expect(startFetchCollection().type).toEqual(
      CollectionActionTypes.START_FETCH_COLLECTION
    );
  });

  it('should create fetchCollectionSuccess action', () => {
    expect(fetchCollectionSuccess().type).toEqual(
      CollectionActionTypes.FETCH_COLLECTION_SUCCESS
    );
  });

  it('should create fetchCollectionFailure action', () => {
    expect(fetchCollectionFailure().type).toEqual(
      CollectionActionTypes.FETCH_COLLECTION_FAILURE
    );
  });
});
