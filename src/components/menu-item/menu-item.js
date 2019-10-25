import React from 'react';

import { MenuItem as S } from './menu-item.styled';

const MenuItem = ({ title, imageUrl, size }) => {
  return (
    <S.Container size={size}>
      <S.Image imageUrl={imageUrl} />
      <S.Content>
        <S.Title>{title.toUpperCase()}</S.Title>
        <S.Subtitle>Placeholder</S.Subtitle>
      </S.Content>
    </S.Container>
  );
};

export default MenuItem;
