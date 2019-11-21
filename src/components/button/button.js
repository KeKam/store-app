import React from 'react';

import { Button as S } from './button.styled';

const Button = ({ children, ...buttonProps }) => {
  return <S.Container {...buttonProps}>{children}</S.Container>;
};

export default Button;
