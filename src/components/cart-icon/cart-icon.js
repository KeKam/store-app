import React from 'react';
import { connect } from 'react-redux';

import { selectCartItemsCount } from '../../redux/selectors/cart.selectors';
import { toggleCart } from '../../redux/actions/cart.actions';
import { CartIcon as S } from './cart-icon.styled';

const CartIcon = ({ itemCount, toggleCart }) => {
  return (
    <S.Container onClick={toggleCart}>
      <S.ShoppingBag />
      <S.Number>{itemCount}</S.Number>
    </S.Container>
  );
};

export default connect(
  state => {
    return {
      itemCount: selectCartItemsCount(state)
    };
  },
  {
    toggleCart
  }
)(CartIcon);
