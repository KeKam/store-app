import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import {
  firestore,
  convertCollectionSnapshotToMap
} from '../../firebase/firebase';
import { updateCollection } from '../../redux/actions/collection.actions';
import WithSpinner from '../../components/with-spinner/with-spinner';
import CollectionOverview from '../../components/collection-overview/collection-overview';
import CollectionCategoryPage from '../collection-category-page/collection-category-page';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionCategoryPageWithSpinner = WithSpinner(CollectionCategoryPage);

const CollectionPage = ({ match }) => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const collectionRef = firestore.collection('collection');
    
    const unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
      const collectionMap = convertCollectionSnapshotToMap(snapshot);
      dispatch(updateCollection(collectionMap));
      setLoading(false);
    });

    return () => {
      unsubscribeFromSnapshot();
    };
  }, [dispatch]);

  return (
    <div>
      <Route
        exact
        path={`${match.path}`}
        render={props => (
          <CollectionOverviewWithSpinner isLoading={loading} {...props} />
        )}
      />
      <Route
        path={`${match.path}/:categoryId`}
        render={props => (
          <CollectionCategoryPageWithSpinner isLoading={loading} {...props} />
        )}
      />
    </div>
  );
};

export default CollectionPage;
