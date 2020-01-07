import { CollectionActionTypes } from '../types/collection.types';

export const updateCollection = collectionMap => ({
  type: CollectionActionTypes.UPDATE_COLLECTION,
  payload: collectionMap
});
