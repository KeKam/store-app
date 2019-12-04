import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems } from '../../redux/selectors/cart.selectors';
import CartItem from '../cart-item/cart-item';
import { CartDropdown as S } from './cart-dropdown.styles';

const CartDropdown = ({ cartItems }) => {
  return (
    <S.Container>
      <S.Items>
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <S.Text>You have no added items</S.Text>
        )}
      </S.Items>
      <S.Button>GO TO CHECKOUT</S.Button>
    </S.Container>
  );
};

export default connect(
  createStructuredSelector({
    cartItems: selectCartItems
  })
)(CartDropdown);
