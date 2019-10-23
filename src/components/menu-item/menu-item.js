import React from 'react';

import { MenuItem as S } from './menu-item.styled';

const MenuItem = ({ title, imageUrl, size }) => {
  return (
    <S.Container imageUrl={imageUrl} size={size}>
      <S.Content>
        <S.Title>{title}</S.Title>
        <S.Subtitle>Placeholder</S.Subtitle>
      </S.Content>
    </S.Container>
  );
};

export default MenuItem;
