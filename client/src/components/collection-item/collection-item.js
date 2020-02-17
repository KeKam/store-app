import React from 'react';
import { useDispatch } from 'react-redux';

import { addToCart } from '../../redux/cart/cart.actions';
import { CollectionItem as S } from './collection-item.styled';

const CollectionItem = ({ item }) => {
  const { name, imageUrl, price } = item;
  const dispatch = useDispatch();

  return (
    <S.Container>
      <S.Image imageUrl={imageUrl} />
      <S.Footer>
        <S.Title>{name}</S.Title>
        <S.Text>{price} €</S.Text>
      </S.Footer>
      <S.Button onClick={() => dispatch(addToCart(item))}>ADD TO CART</S.Button>
    </S.Container>
  );
};

export default CollectionItem;
