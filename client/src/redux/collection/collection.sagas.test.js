import { takeLatest, call, put } from 'redux-saga/effects';

import {
  firestore,
  convertCollectionSnapshotToMap,
} from '../../firebase/firebase';

import {
  fetchCollectionSuccess,
  fetchCollectionFailure,
} from './collection.actions';

import CollectionActionTypes from './collection.types';

import { fetchCollection, onStartFetchCollection } from './collection.sagas';

describe('Collection sagas', () => {
  describe('on onStartFetchCollection saga', () => {
    it('should trigger on START_FETCH_COLLECTION', () => {
      const generator = onStartFetchCollection();

      expect(generator.next().value).toEqual(
        takeLatest(
          CollectionActionTypes.START_FETCH_COLLECTION,
          fetchCollection
        )
      );
    });
  });

  describe('on fetchCollection saga', () => {
    const generator = fetchCollection();

    it('should call firestore.collection', () => {
      const getCollection = jest.spyOn(firestore, 'collection');
      generator.next();

      expect(getCollection).toHaveBeenCalled();
    });

    it('should call convertCollectionSnapshotToMap', () => {
      const mockSnapshot = {};

      expect(generator.next(mockSnapshot).value).toEqual(
        call(convertCollectionSnapshotToMap, mockSnapshot)
      );
    });

    it('should call fetchCollectionSuccess', () => {
      const mockCollectionMap = {
        spring: {
          id: 1,
        },
      };

      expect(generator.next(mockCollectionMap).value).toEqual(
        put(fetchCollectionSuccess(mockCollectionMap))
      );
    });

    it('should call fetchCollectionFailure on error', () => {
      const newGenerator = fetchCollection();
      newGenerator.next();

      expect(newGenerator.throw('error').value).toEqual(
        put(fetchCollectionFailure('error'))
      );
    });
  });
});
