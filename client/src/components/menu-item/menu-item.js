import React from 'react';
import { withRouter } from 'react-router-dom';

import { MenuItem as S } from './menu-item.styled';

const MenuItem = ({ title, imageUrl, history, linkUrl, match }) => (
  <S.Container onClick={() => history.push(`${match.url}${linkUrl}`)}>
    <S.Image imageUrl={imageUrl} />
    <S.Content>
      <S.Title>{title}</S.Title>
      <S.Subtitle>SEE COLLECTION</S.Subtitle>
    </S.Content>
  </S.Container>
);

export default withRouter(MenuItem);
