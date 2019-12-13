import React from 'react';
import { Route } from 'react-router-dom';

import CollectionOverview from '../../components/collection-overview/collection-overview';
import CollectionCategoryPage from '../collection-category-page/collection-category-page';

const CollectionPage = ({ match }) => {
  return (
    <div>
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:categoryId`} component={CollectionCategoryPage} />
    </div>
  );
};

export default CollectionPage;
