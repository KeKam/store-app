import { COLLECTION_DATA } from '../data/collection.data';

const DEFAULT_STATE = {
  collectionItems: COLLECTION_DATA
};

const collectionReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default collectionReducer;
