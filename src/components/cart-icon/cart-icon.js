import React from 'react';

import { CartIcon as S } from './cart-icon.styled';

const CartIcon = () => {
  return (
    <S.Container>
      <S.ShoppingBag />
      <S.Number>0</S.Number>
    </S.Container>
  );
};

export default CartIcon;
