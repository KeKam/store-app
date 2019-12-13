import React from 'react';
import { useSelector } from 'react-redux';

import { selectCollectionCategory } from '../../redux/selectors/collection.selectors';
import CollectionItem from '../../components/collection-item/collection-item';
import { CollectionCategoryPage as S } from './collection-category-page.styled';

const CollectionCategoryPage = ({ match }) => {
  const category = useSelector(
    selectCollectionCategory(match.params.categoryId)
  );
  const { title, items } = category;

  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.Items>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </S.Items>
    </S.Container>
  );
};

export default CollectionCategoryPage;
