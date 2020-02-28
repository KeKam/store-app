import React from 'react';
import { useDispatch } from 'react-redux';

import {
  removeFromCart,
  removeItem,
  addToCart
} from '../../redux/cart/cart.actions';
import { CheckoutItem as S } from './checkout-item.styled';

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const dispatch = useDispatch();

  return (
    <S.Container>
      <S.ImageContainer>
        <S.Image alt='item' src={imageUrl} />
      </S.ImageContainer>
      <S.Text>{name}</S.Text>
      <S.QuantityContainer>
        <S.Arrow onClick={() => dispatch(removeFromCart(cartItem))}>
          &#10094;
        </S.Arrow>
        <span>{quantity}</span>
        <S.Arrow onClick={() => dispatch(addToCart(cartItem))}>
          &#10095;
        </S.Arrow>
      </S.QuantityContainer>
      <S.Text>{quantity * price} €</S.Text>
      <S.RemoveButton onClick={() => dispatch(removeItem(cartItem))}>
        &#10005;
      </S.RemoveButton>
    </S.Container>
  );
};

export default CheckoutItem;
