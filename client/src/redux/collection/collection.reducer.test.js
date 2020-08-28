import CollectionActionTypes from './collection.types';
import collectionReducer from './collection.reducer';

const DEFAULT_STATE = {
  categories: null,
  isFetching: false,
  error: undefined,
};

describe('collectionReducer', () => {
  it('should return default state', () => {
    expect(collectionReducer(undefined, {})).toEqual(DEFAULT_STATE);
  });

  it('should set isFetching to true if startFetchCollection', () => {
    expect(
      collectionReducer(DEFAULT_STATE, {
        type: CollectionActionTypes.START_FETCH_COLLECTION,
      }).isFetching
    ).toBe(true);
  });

  it('should set isFetching to false and categories to payload if fetchCollectionSuccess', () => {
    const mockItems = [{ id: 1 }, { id: 2 }];

    expect(
      collectionReducer(DEFAULT_STATE, {
        type: CollectionActionTypes.FETCH_COLLECTION_SUCCESS,
        payload: mockItems,
      })
    ).toEqual({ ...DEFAULT_STATE, isFetching: false, categories: mockItems });
  });

  it('should set isFetching to false and error to payload if fetchCollectionFailure', () => {
    expect(
      collectionReducer(DEFAULT_STATE, {
        type: CollectionActionTypes.FETCH_COLLECTION_FAILURE,
        payload: 'error',
      })
    ).toEqual({ ...DEFAULT_STATE, isFetching: false, error: 'error' });
  });
});
