import React, { useState } from 'react';

import { COLLECTION_DATA } from './collection.data';
import CollectionPreview from './../../components/collection-preview/collection-preview';

const CollectionPage = () => {
  const [collections, setCollections] = useState(COLLECTION_DATA);

  return (
    <div>
      {collections.map(({ id, ...collectionProps }) => {
        return <CollectionPreview key={id} {...collectionProps} />;
      })}
    </div>
  );
};

export default CollectionPage;
