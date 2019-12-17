import React from 'react';

import { CartItem as S } from './cart-item.styled';

const CartItem = ({ item: { imageUrl, name, price, quantity } }) => (
  <S.Container>
    <S.Image src={imageUrl} alt={name.toString()} />
    <S.Details>
      <S.Text>{name}</S.Text>
      <S.Text>
        {quantity} x {price} €{' '}
      </S.Text>
    </S.Details>
  </S.Container>
);

export default CartItem;
