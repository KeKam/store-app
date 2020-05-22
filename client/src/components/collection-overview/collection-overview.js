import React from 'react';
import { useSelector } from 'react-redux';

import {
  selectCollectionCategoriesForPreview,
  selectIsCollectionFetching,
} from '../../redux/collection/collection.selectors';
import Spinner from '../spinner/spinner';
import CollectionPreview from '../collection-preview/collection-preview';

const CollectionOverview = () => {
  const isCollectionFetching = useSelector(selectIsCollectionFetching);
  const collection = useSelector(selectCollectionCategoriesForPreview);

  return (
    <div>
      {isCollectionFetching ? (
        <Spinner />
      ) : (
        <div>
          {collection.map(({ id, ...collectionProps }) => (
            <CollectionPreview key={id} {...collectionProps} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CollectionOverview;
