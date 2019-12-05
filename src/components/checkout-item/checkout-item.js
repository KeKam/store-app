import React from 'react';

import { CheckoutItem as S } from './checkout-item.styled';

const CheckoutItem = ({ cartItem: { name, imageUrl, price, quantity } }) => {
  return (
    <S.Container>
      <S.ImageContainer>
        <S.Image alt='item' src={imageUrl} />
      </S.ImageContainer>
      <S.Text>{name}</S.Text>
      <S.Quantity>{quantity}</S.Quantity>
      <S.Text>{price}</S.Text>
      <S.Button>&#10005;</S.Button>
    </S.Container>
  );
};

export default CheckoutItem;
