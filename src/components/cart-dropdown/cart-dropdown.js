import React from 'react';

import { CartDropdown as S } from './cart-dropdown.styles';

const CartDropdown = () => {
  return (
    <S.Container>
      <S.Items />
      <S.Button>GO TO CHECKOUT</S.Button>
    </S.Container>
  );
};

export default CartDropdown;
