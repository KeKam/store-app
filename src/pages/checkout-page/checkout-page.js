import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems } from '../../redux/selectors/cart.selectors';
import { CheckoutPage as S } from './checkout-page.styled';

const CheckoutPage = ({ cartItems }) => {
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
          <span>Price</span>
        </S.Block>
        <S.Block>
          <span>Quantity</span>
        </S.Block>
        <S.Block>
          <span>Remove</span>
        </S.Block>
      </S.Header>
      {cartItems.map(cartItem => cartItem.name)}
      <S.TotalContainer>
        <span>TOTAL: 0 €</span>
      </S.TotalContainer>
    </S.Container>
  );
};

export default connect(
  createStructuredSelector({
    cartItems: selectCartItems
  })
)(CheckoutPage);
