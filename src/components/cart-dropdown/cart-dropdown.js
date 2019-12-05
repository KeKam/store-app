import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import { selectCartItems } from '../../redux/selectors/cart.selectors';
import CartItem from '../cart-item/cart-item';
import { CartDropdown as S } from './cart-dropdown.styles';

const CartDropdown = ({ cartItems, history }) => {
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
      <S.Button onClick={() => history.push('/checkout')}>
        GO TO CHECKOUT
      </S.Button>
    </S.Container>
  );
};

export default withRouter(
  connect(
    createStructuredSelector({
      cartItems: selectCartItems
    })
  )(CartDropdown)
);
