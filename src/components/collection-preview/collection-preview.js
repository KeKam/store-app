import React from 'react';

import CollectionItem from '../collection-item/collection-item';
import { CollectionPreview as S } from './collection-preview.styled';

const CollectionPreview = ({ title, items }) => (
  <S.Container>
    <S.Title>{title.toUpperCase()}</S.Title>
    <S.Preview>
      {items
        .filter((item, idx) => idx < 4)
        .map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </S.Preview>
  </S.Container>
);

export default CollectionPreview;
