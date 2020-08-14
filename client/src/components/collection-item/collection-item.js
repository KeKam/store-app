import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addToCart } from '../../redux/cart/cart.actions';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { CollectionItem as S } from './collection-item.styled';

const CollectionItem = ({ item }) => {
  const { name, imageUrl, price } = item;
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  return (
    <S.Container>
      <S.Image data-testid='image' imageUrl={imageUrl} />
      <S.Footer>
        <S.Title data-testid='title'>{name}</S.Title>
        <S.Text data-testid='price'>{price} €</S.Text>
      </S.Footer>
      {currentUser ? (
        <S.Button
          data-testid='button'
          onClick={() => dispatch(addToCart(item))}
        >
          ADD TO CART
        </S.Button>
      ) : (
        <S.SignInButton data-testid='link' to='/login'>
          <S.SignInButtonText>Sign in required</S.SignInButtonText>
        </S.SignInButton>
      )}
    </S.Container>
  );
};

export default CollectionItem;
