import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { startAsyncFetchCollection } from '../../redux/actions/collection.actions';
import { selectIsCollectionFetching, selectIsCollectionFetched } from '../../redux/selectors/collection.selectors';
import WithSpinner from '../../components/with-spinner/with-spinner';
import CollectionOverview from '../../components/collection-overview/collection-overview';
import CollectionCategoryPage from '../collection-category-page/collection-category-page';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionCategoryPageWithSpinner = WithSpinner(CollectionCategoryPage);

const CollectionPage = ({ match }) => {
  const isCollectionFetching = useSelector(selectIsCollectionFetching);
  const isCollectionFetched = useSelector(selectIsCollectionFetched);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startAsyncFetchCollection());
  }, [dispatch]);

  return (
    <div>
      <Route
        exact
        path={`${match.path}`}
        render={props => (
          <CollectionOverviewWithSpinner
            isLoading={isCollectionFetching}
            {...props}
          />
        )}
      />
      <Route
        path={`${match.path}/:categoryId`}
        render={props => (
          <CollectionCategoryPageWithSpinner
            isLoading={!isCollectionFetched}
            {...props}
          />
        )}
      />
    </div>
  );
};

export default CollectionPage;
