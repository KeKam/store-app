import React from 'react';

import CollectionItem from '../collection-item/collection-item';
import { CollectionPreview as S } from './collection-preview.styled';

const CollectionPreview = ({ title, items }) => {
  return (
    <S.Container>
      <S.Title>{title.toUpperCase()}</S.Title>
      <S.Preview>
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...itemProps }) => {
            return <CollectionItem key={id} {...itemProps} />;
          })}
      </S.Preview>
    </S.Container>
  );
};

export default CollectionPreview;
