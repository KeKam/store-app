import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCart } from '../../redux/cart/cart.actions';
import CartItem from '../cart-item/cart-item';
import { CartDropdown as S } from './cart-dropdown.styles';

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <S.Container>
      <S.Items>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <S.Text>You have no added items</S.Text>
        )}
      </S.Items>
      <S.Button
        onClick={() => {
          history.push('/checkout');
          dispatch(toggleCart());
        }}
      >
        GO TO CHECKOUT
      </S.Button>
    </S.Container>
  );
};

export default CartDropdown;
