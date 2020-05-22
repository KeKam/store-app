import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';

import CollectionItem from '../collection-item/collection-item';
import { CollectionPreview as S } from './collection-preview.styled';

const CollectionPreview = ({ title, items, routeName }) => {
  const history = useHistory();
  const match = useRouteMatch();

  return (
    <S.Container>
      <S.Title onClick={() => history.push(`${match.path}/${routeName}`)}>
        {title.toUpperCase()}
      </S.Title>
      <S.Preview>
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </S.Preview>
    </S.Container>
  );
};

export default CollectionPreview;
