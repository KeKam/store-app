import React from 'react';
import { useSelector } from 'react-redux';

import {
  selectCartItems,
  selectCartTotal
} from '../../redux/selectors/cart.selectors';
import CheckoutItem from '../../components/checkout-item/checkout-item';
import StipeCheckoutButton from '../../components/stripe-checkout-button/stripe-checkout-button';
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
      {cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <S.TotalContainer>
        <span>TOTAL: {cartTotal} €</span>
      </S.TotalContainer>
      <S.Warning>
        *Please use this test credit card for payments on this site*
        <br />
        4242 4242 4242 4242 - Exp: 01/21 - CVC: 543
      </S.Warning>
      <StipeCheckoutButton price={cartTotal} />
    </S.Container>
  );
};

export default CheckoutPage;
