import React from 'react';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase';
import { Header as S } from './header.styled';

const Header = ({ currentUser }) => {
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
      </S.Options>
    </S.Container>
  );
};

export default connect(state => {
  return {
    currentUser: state.user.currentUser
  };
})(Header);
