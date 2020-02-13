import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { startSignOut } from '../../redux/user/user.actions';
import { toggleCart } from '../../redux/cart/cart.actions';
import CartIcon from '../cart-icon/cart-icon';
import CartDropdown from '../cart-dropdown/cart-dropdown';
import { Header as S } from './header.styled';

const Header = () => {
  const currentUser = useSelector(selectCurrentUser);
  const hidden = useSelector(selectCartHidden);
  const dispatch = useDispatch();

  const closeCart = () => {
    if (!hidden) {
      dispatch(toggleCart());
    }
  };

  return (
    <S.Container>
      <S.Logo to='/' onClick={closeCart}>
        <S.LogoNumber>4</S.LogoNumber>
        <S.LogoText>SEASONS</S.LogoText>
      </S.Logo>
      <S.Options>
        <S.Option to='/collection' onClick={closeCart}>COLLECTION</S.Option>
        <S.Option to='/contact' onClick={closeCart}>CONTACT</S.Option>
        {currentUser ? (
          <S.Option as='div' to='' onClick={() => dispatch(startSignOut())}>
            SIGN OUT
          </S.Option>
        ) : (
          <S.Option to='/login' onClick={closeCart}>SIGN IN</S.Option>
        )}
        <CartIcon />
      </S.Options>
      {hidden ? null : <CartDropdown />}
    </S.Container>
  );
};

export default Header;
