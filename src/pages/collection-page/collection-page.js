import React from 'react';
import { useSelector } from 'react-redux';

import { selectCollectionItems } from '../../redux/selectors/collection.selectors';
import CollectionPreview from './../../components/collection-preview/collection-preview';

const CollectionPage = () => {
  const collections = useSelector(selectCollectionItems);

  return (
    <div>
      {collections.map(({ id, ...collectionProps }) => {
        return <CollectionPreview key={id} {...collectionProps} />;
      })}
    </div>
  );
};

export default CollectionPage;
