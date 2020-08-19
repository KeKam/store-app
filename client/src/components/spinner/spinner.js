import React from 'react';

import { Spinner as S } from './spinner.styled';

const Spinner = () => {
  return (
    <S.Container>
      <S.Spinner data-testid='spinner' />
    </S.Container>
  );
};

export default Spinner;
