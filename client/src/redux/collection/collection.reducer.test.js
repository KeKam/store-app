import CollectionActionTypes from './collection.types';
import collectionReducer from './collection.reducer';

const mockState = {
  categories: null,
  isFetching: false,
  error: undefined,
};

describe('collectionReducer', () => {
  it('should return default state', () => {
    expect(collectionReducer(undefined, {})).toEqual(mockState);
  });

  it('should set isFetching to true if startFetchCollection', () => {
    expect(
      collectionReducer(mockState, {
        type: CollectionActionTypes.START_FETCH_COLLECTION,
      }).isFetching
    ).toBe(true);
  });

  it('should set isFetching to false and categories to payload if fetchCollectionSuccess', () => {
    const mockItems = [{ id: 1 }, { id: 2 }];

    expect(
      collectionReducer(mockState, {
        type: CollectionActionTypes.FETCH_COLLECTION_SUCCESS,
        payload: mockItems,
      })
    ).toEqual({ ...mockState, isFetching: false, categories: mockItems });
  });

  it('should set isFetching to false and error to payload if fetchCollectionFailure', () => {
    expect(
      collectionReducer(mockState, {
        type: CollectionActionTypes.FETCH_COLLECTION_FAILURE,
        payload: 'error',
      })
    ).toEqual({ ...mockState, isFetching: false, error: 'error' });
  });
});
