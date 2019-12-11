import React from 'react';
import { Circle } from 'styled-spinkit';

import { Loading as S } from './loading.styled';

const Loading = () => {
  return (
    <S.Container>
      <Circle size='70' />
    </S.Container>
  );
};

export default Loading;