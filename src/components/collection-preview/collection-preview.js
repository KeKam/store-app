import React from 'react';

import CollectionItem from '../collection-item/collection-item';

const CollectionPreview = ({ title, items }) => {
  return (
    <div>
      <h1>{title.toUpperCase()}</h1>
      <div>
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...itemProps }) => {
            return <CollectionItem key={id} {...itemProps} />;
          })}
      </div>
    </div>
  );
};

export default CollectionPreview;
