import React from 'react';
import { useSelector } from 'react-redux';

import { selectCollectionsForPreview } from '../../redux/selectors/collection.selectors';
import CollectionPreview from '../collection-preview/collection-preview';

const CollectionOverview = () => {
  const collections = useSelector(selectCollectionsForPreview);

  return (
    <div>
      {collections.map(({ id, ...collectionProps }) => {
        return <CollectionPreview key={id} {...collectionProps} />;
      })}
    </div>
  );
};

export default CollectionOverview;
