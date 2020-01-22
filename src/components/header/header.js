import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { startSignOut } from '../../redux/user/user.actions';
import CartIcon from '../cart-icon/cart-icon';
import CartDropdown from '../cart-dropdown/cart-dropdown';
import { Header as S } from './header.styled';

const Header = () => {
  const currentUser = useSelector(selectCurrentUser);
  const hidden = useSelector(selectCartHidden);
  const dispatch = useDispatch();

  return (
    <S.Container>
      <S.Logo to='/'>Placeholder</S.Logo>
      <S.Options>
        <S.Option to='/collection'>COLLECTION</S.Option>
        <S.Option to='/contact'>CONTACT</S.Option>
        {currentUser ? (
          <S.Option as='div' to='' onClick={() => dispatch(startSignOut())}>
            SIGN OUT
          </S.Option>
        ) : (
          <S.Option to='/login'>SIGN IN</S.Option>
        )}
        <CartIcon />
      </S.Options>
      {hidden ? null : <CartDropdown />}
    </S.Container>
  );
};

export default Header;
