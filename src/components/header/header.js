import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from '../../redux/selectors/user.selectors';
import { selectCartHidden } from '../../redux/selectors/cart.selectors';
import { auth } from '../../firebase/firebase';
import CartIcon from '../cart-icon/cart-icon';
import CartDropdown from '../cart-dropdown/cart-dropdown';
import { Header as S } from './header.styled';

const Header = ({ currentUser, hidden }) => {
  return (
    <S.Container>
      <S.Logo to='/'>Placeholder</S.Logo>
      <S.Options>
        <S.Option to='/collection'>COLLECTION</S.Option>
        <S.Option to='/contact'>CONTACT</S.Option>
        {currentUser ? (
          <S.Option as='div' to='' onClick={() => auth.signOut()}>
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

export default connect(
  createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
  })
)(Header);
