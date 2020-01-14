import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { startAsyncFetchCollection } from '../../redux/collection/collection.actions';
import CollectionOverview from '../../components/collection-overview/collection-overview';
import CollectionCategoryPage from '../collection-category-page/collection-category-page';

const CollectionPage = ({ match }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startAsyncFetchCollection());
  }, [dispatch]);

  return (
    <div>
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route
        path={`${match.path}/:categoryId`}
        component={CollectionCategoryPage}
      />
    </div>
  );
};

export default CollectionPage;
