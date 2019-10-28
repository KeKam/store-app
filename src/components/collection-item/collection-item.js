import React from 'react';

import { CollectionItem as S } from './collection-item.styled';

const CollectionItem = ({ id, name, imageUrl, price }) => {
  return (
    <S.Container>
      <S.Image imageUrl={imageUrl} />
      <S.Footer>
        <S.Title>{name}</S.Title>
        <S.Title>{price}</S.Title>
      </S.Footer>
    </S.Container>
  );
};

export default CollectionItem;
