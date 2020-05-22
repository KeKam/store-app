import CollectionActionTypes from './collection.types';

const DEFAULT_STATE = {
  categories: null,
  isFetching: false,
  error: undefined,
};

const collectionReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case CollectionActionTypes.START_FETCH_COLLECTION:
      return {
        ...state,
        isFetching: true,
      };
    case CollectionActionTypes.FETCH_COLLECTION_SUCCESS:
      return {
        ...state,
        isFetching: false,
        categories: action.payload,
      };
    case CollectionActionTypes.FETCH_COLLECTION_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default collectionReducer;
