import React from 'react';
import { useSelector } from 'react-redux';

import {
  selectCollectionCategory,
  selectIsCollectionFetched,
} from '../../redux/collection/collection.selectors';
import CollectionItem from '../../components/collection-item/collection-item';
import Spinner from '../../components/spinner/spinner';
import { CollectionCategoryPage as S } from './collection-category-page.styled';

const CollectionCategoryPage = ({ match }) => {
  const isCollectionFetched = useSelector(selectIsCollectionFetched);
  const category = useSelector(
    selectCollectionCategory(match.params.categoryId)
  );

  return (
    <div>
      {!isCollectionFetched ? (
        <Spinner />
      ) : (
        <S.Container>
          <S.Title>{category.title.toUpperCase()}</S.Title>
          <S.Items>
            {category.items.map((item) => (
              <CollectionItem key={item.id} item={item} />
            ))}
          </S.Items>
        </S.Container>
      )}
    </div>
  );
};

export default CollectionCategoryPage;
