import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';

import { MenuItem as S } from './menu-item.styled';

const MenuItem = ({ title, imageUrl, linkUrl }) => {
  const history = useHistory();
  const match = useRouteMatch();

  return (
    <S.Container onClick={() => history.push(`${match.url}${linkUrl}`)}>
      <S.Image imageUrl={imageUrl} />
      <S.Content>
        <S.Title>{title}</S.Title>
        <S.Subtitle>SEE COLLECTION</S.Subtitle>
      </S.Content>
    </S.Container>
  );
};

export default MenuItem;
