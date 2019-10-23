import React from 'react';

import Directory from '../../components/directory/directory';
import { HomePage as S } from './homepage.styled';

const HomePage = () => {
  return (
    <S.Container>
      <Directory />
    </S.Container>
  );
};

export default HomePage;
