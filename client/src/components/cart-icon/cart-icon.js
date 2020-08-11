import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { toggleCart } from '../../redux/cart/cart.actions';
import { CartIcon as S } from './cart-icon.styled';

const CartIcon = ({ hasScrolledDown }) => {
  const itemCount = useSelector(selectCartItemsCount);
  const dispatch = useDispatch();

  return (
    <S.Container
      hasScrolledDown={hasScrolledDown}
      onClick={() => dispatch(toggleCart())}
    >
      {hasScrolledDown ? (
        <S.ShoppingBagExtended data-testid='bag-extended' />
      ) : (
        <S.ShoppingBag data-testid='bag' />
      )}
      <S.Number data-testid='item-count'>{itemCount}</S.Number>
    </S.Container>
  );
};

export default CartIcon;
