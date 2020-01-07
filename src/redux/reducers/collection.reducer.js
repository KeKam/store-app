import { CollectionActionTypes } from '../types/collection.types';

const DEFAULT_STATE = {
  categories: []
};

const collectionReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case CollectionActionTypes.UPDATE_COLLECTION:
      return {
        ...state,
        categories: action.payload
      }
    default:
      return state;
  }
};

export default collectionReducer;
