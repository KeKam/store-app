import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { startFetchCollection } from '../../redux/collection/collection.actions';
import CollectionOverview from '../../components/collection-overview/collection-overview';
import CollectionCategoryPage from '../collection-category-page/collection-category-page';
import { CollectionPage as S } from './collection-page.styled';

const CollectionPage = ({ match }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startFetchCollection());
  }, [dispatch]);

  return (
    <S.Container data-testid='container'>
      <Route exact path={match.path} component={CollectionOverview} />
      <Route
        path={`${match.path}/:categoryId`}
        component={CollectionCategoryPage}
      />
    </S.Container>
  );
};

export default CollectionPage;
