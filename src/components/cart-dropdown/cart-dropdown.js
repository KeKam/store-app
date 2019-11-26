import React from 'react';
import { connect } from 'react-redux';

import CartItem from '../cart-item/cart-item';
import { CartDropdown as S } from './cart-dropdown.styles';

const CartDropdown = ({ cartItems }) => {
  return (
    <S.Container>
      <S.Items>
        {cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </S.Items>
      <S.Button>GO TO CHECKOUT</S.Button>
    </S.Container>
  );
};

export default connect(state => {
  return {
    cartItems: state.cart.cartItems
  };
})(CartDropdown);
