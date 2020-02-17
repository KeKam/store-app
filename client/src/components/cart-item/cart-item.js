import React from 'react';
import { useDispatch } from 'react-redux';

import { removeItem } from '../../redux/cart/cart.actions';
import { CartItem as S } from './cart-item.styled';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const { name, imageUrl, price, quantity } = item;

  return (
    <S.Container>
      <S.Image src={imageUrl} alt='item' />
      <S.Details>
        <S.Text>{name}</S.Text>
        <S.Text>
          {quantity} x {price} €{' '}
        </S.Text>
      </S.Details>
      <S.RemoveButton onClick={() => dispatch(removeItem(item))}>
        &#10005;
      </S.RemoveButton>
    </S.Container>
  );
};

export default React.memo(CartItem);
