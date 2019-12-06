import React from 'react';
import { useSelector } from 'react-redux';

import {
  selectCartItems,
  selectCartTotal
} from '../../redux/selectors/cart.selectors';
import CheckoutItem from '../../components/checkout-item/checkout-item';
import { CheckoutPage as S } from './checkout-page.styled';

const CheckoutPage = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <S.Container>
      <S.Header>
        <S.Block>
          <span>Product</span>
        </S.Block>
        <S.Block>
          <span>Description</span>
        </S.Block>
        <S.Block>
          <span>Quantity</span>
        </S.Block>
        <S.Block>
          <span>Price</span>
        </S.Block>
        <S.Block>
          <span>Remove</span>
        </S.Block>
      </S.Header>
      {cartItems.map(cartItem => {
        return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
      })}
      <S.TotalContainer>
        <span>TOTAL: {cartTotal} €</span>
      </S.TotalContainer>
    </S.Container>
  );
};

export default CheckoutPage;
