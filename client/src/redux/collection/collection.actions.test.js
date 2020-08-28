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
    const mockCollectionMap = {
      spring: {
        id: 1,
      },
    };

    const action = fetchCollectionSuccess(mockCollectionMap);

    expect(action.type).toEqual(CollectionActionTypes.FETCH_COLLECTION_SUCCESS);
    expect(action.payload).toEqual(mockCollectionMap);
  });

  it('should create fetchCollectionFailure action', () => {
    const mockError = {
      error: 'errored',
    };

    const action = fetchCollectionFailure(mockError);

    expect(action.type).toEqual(CollectionActionTypes.FETCH_COLLECTION_FAILURE);
    expect(action.payload).toEqual(mockError);
  });
});
