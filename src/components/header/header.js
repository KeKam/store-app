import React from 'react';

import { Header as S } from './header.styled';

const Header = () => {
  return (
    <S.Container>
      <S.Logo to='/'>Placeholder</S.Logo>
      <S.Options>
        <S.Option to='/collection'>COLLECTION</S.Option>
        <S.Option to='/contact'>CONTACT</S.Option>
      </S.Options>
    </S.Container>
  );
};

export default Header;
