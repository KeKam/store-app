import React from 'react';
import { useSelector } from 'react-redux';

import { selectCollectionCategoriesForPreview } from '../../redux/selectors/collection.selectors';
import CollectionPreview from '../collection-preview/collection-preview';

const CollectionOverview = () => {
  const collection = useSelector(selectCollectionCategoriesForPreview);

  return (
    <div>
      {collection.map(({ id, ...collectionProps }) => (
        <CollectionPreview key={id} {...collectionProps} />
      ))}
    </div>
  );
};

export default CollectionOverview;
