import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectCartItemsCount } from '../../redux/selectors/cart.selectors';
import { toggleCart } from '../../redux/actions/cart.actions';
import { CartIcon as S } from './cart-icon.styled';

const CartIcon = () => {
  const itemCount = useSelector(selectCartItemsCount);
  const dispatch = useDispatch();

  return (
    <S.Container onClick={() => dispatch(toggleCart())}>
      <S.ShoppingBag />
      <S.Number>{itemCount}</S.Number>
    </S.Container>
  );
};

export default CartIcon;
