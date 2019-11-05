import React from 'react';

import { auth } from '../../firebase/firebase';
import { Header as S } from './header.styled';

const Header = ({ user }) => {
  return (
    <S.Container>
      <S.Logo to='/'>Placeholder</S.Logo>
      <S.Options>
        <S.Option to='/collection'>COLLECTION</S.Option>
        <S.Option to='/contact'>CONTACT</S.Option>
        {user ? (
          <S.Option as='div' onClick={() => auth.signOut()}>
            SIGN OUT
          </S.Option>
        ) : (
          <S.Option to='/login'>SIGN IN</S.Option>
        )}
      </S.Options>
    </S.Container>
  );
};

export default Header;
