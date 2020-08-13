import React from 'react';
import { useDispatch } from 'react-redux';

import {
  removeFromCart,
  removeItem,
  addToCart,
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
      <S.Text data-testid='title'>{name}</S.Text>
      <S.QuantityContainer>
        <S.Arrow
          data-testid='left-arrow'
          onClick={() => dispatch(removeFromCart(cartItem))}
        >
          &#10094;
        </S.Arrow>
        <span data-testid='quantity'>{quantity}</span>
        <S.Arrow
          data-testid='right-arrow'
          onClick={() => dispatch(addToCart(cartItem))}
        >
          &#10095;
        </S.Arrow>
      </S.QuantityContainer>
      <S.Text data-testid='price'>{quantity * price} €</S.Text>
      <S.RemoveButton
        data-testid='remove-button'
        onClick={() => dispatch(removeItem(cartItem))}
      >
        &#10005;
      </S.RemoveButton>
    </S.Container>
  );
};

export default CheckoutItem;
