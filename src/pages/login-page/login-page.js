import React from 'react';

import SignIn from '../../components/sign-in/sign-in';
import SignUp from '../../components/sign-up/sign-up';
import { LoginPage as S } from './login-page.styled';

const LoginPage = () => {
  return (
    <S.Container>
      <SignIn />
      <SignUp />
    </S.Container>
  );
};

export default LoginPage;
