import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';

import { MenuItem as S } from './menu-item.styled';

const MenuItem = ({ title, imageUrl, linkUrl }) => {
  const history = useHistory();
  const match = useRouteMatch();

  return (
    <S.Container
      data-testid='item'
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <S.Image data-testid='image' imageUrl={imageUrl} />
      <S.Content>
        <S.Title data-testid='title'>{title}</S.Title>
        <S.Subtitle>SEE COLLECTION</S.Subtitle>
      </S.Content>
    </S.Container>
  );
};

export default MenuItem;
