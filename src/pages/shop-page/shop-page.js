import React, { useState } from 'react';

import { SHOP_DATA } from './shop.data';
import CollectionPreview from './../../components/collection-preview/collection-preview';

const ShopPage = () => {
  const [collections, setCollections] = useState(SHOP_DATA);

  return (
    <div>
      {collections.map(({ id, ...collectionProps }) => {
        return <CollectionPreview key={id} {...collectionProps} />;
      })}
    </div>
  );
};

export default ShopPage;
