import React from 'react';
import { connect } from 'react-redux';

import { toggleCart } from '../../redux/actions/cart.actions';
import { CartIcon as S } from './cart-icon.styled';

const CartIcon = ({ toggleCart }) => {
  return (
    <S.Container onClick={toggleCart}>
      <S.ShoppingBag />
      <S.Number>0</S.Number>
    </S.Container>
  );
};

export default connect(
  null,
  {
    toggleCart
  }
)(CartIcon);
