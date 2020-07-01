import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { startSignOut } from '../../redux/user/user.actions';
import { toggleCart } from '../../redux/cart/cart.actions';
import CartIcon from '../cart-icon/cart-icon';
import CartDropdown from '../cart-dropdown/cart-dropdown';
import { Header as S } from './header.styled';

const Header = () => {
  const [hasScrolledDown, setHasScrolledDown] = useState(false);
  const currentUser = useSelector(selectCurrentUser);
  const hidden = useSelector(selectCartHidden);
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener('scroll', handleOnScroll);
  }, []);

  const handleOnClick = () => {
    if (!hidden) {
      dispatch(toggleCart());
    }
  };

  const handleOnScroll = () => {
    const bodyScrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    const scrolledDown = bodyScrollTop > 50 ? true : false;
    setHasScrolledDown(scrolledDown);
  };

  return (
    <S.Container hasScrolledDown={hasScrolledDown}>
      <S.LogoContainer hasScrolledDown={hasScrolledDown}>
        <S.Logo to='/' onClick={handleOnClick}>
          <S.LogoNumber hasScrolledDown={hasScrolledDown}>4</S.LogoNumber>
          <S.LogoText>SEASONS</S.LogoText>
        </S.Logo>
      </S.LogoContainer>
      <S.Options onClick={handleOnClick} hasScrolledDown={hasScrolledDown}>
        <S.Option to='/collection'>COLLECTION</S.Option>
        <S.Option to='/contact'>CONTACT</S.Option>
        {currentUser ? (
          <S.Option to='/' onClick={() => dispatch(startSignOut())}>
            SIGN OUT
          </S.Option>
        ) : (
          <S.Option to='/login'>SIGN IN</S.Option>
        )}
        {currentUser ? <CartIcon hasScrolledDown={hasScrolledDown} /> : null}
      </S.Options>
      {hidden ? null : <CartDropdown />}
    </S.Container>
  );
};

export default Header;
