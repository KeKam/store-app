import React from 'react';

import { Button as S } from './button.styled';

const Button = ({ children, ...buttonProps }) => {
  return <S.Button {...buttonProps}>{children}</S.Button>;
};

export default Button;
