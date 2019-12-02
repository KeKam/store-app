import React from 'react';
import { connect } from 'react-redux';

import { addToCart } from '../../redux/actions/cart.actions';
import { CollectionItem as S } from './collection-item.styled';

const CollectionItem = ({ item, addToCart }) => {
  const { name, imageUrl, price } = item;

  return (
    <S.Container>
      <S.Image imageUrl={imageUrl} />
      <S.Footer>
        <S.Title>{name}</S.Title>
        <S.Title>{price}</S.Title>
      </S.Footer>
      <S.Button onClick={() => addToCart(item)}>ADD TO CART</S.Button>
    </S.Container>
  );
};

export default connect(
  null,
  {
    addToCart
  }
)(CollectionItem);
