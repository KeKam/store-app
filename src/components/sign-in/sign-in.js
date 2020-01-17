import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import FormInput from '../form-input/form-input';
import Button from '../button/button';
import {
  startGoogleSignIn,
  startEmailSignIn
} from '../../redux/user/user.actions';
import { SignIn as S } from './sign-in.styled';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();
    dispatch(startEmailSignIn({ email, password }));
    resetFields();
  };

  const onEmailChange = e => {
    const inputValue = e.target.value;
    setEmail(inputValue);
  };

  const onPasswordChange = e => {
    const inputValue = e.target.value;
    setPassword(inputValue);
  };

  const resetFields = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <S.Container>
      <S.Title>I already have an account</S.Title>
      <span>Sign in with your email and password</span>

      <form onSubmit={onSubmit}>
        <FormInput
          name='email'
          type='email'
          value={email}
          onChange={onEmailChange}
          label='Email'
          required
        />
        <FormInput
          name='password'
          type='password'
          value={password}
          onChange={onPasswordChange}
          label='Password'
          required
        />
        <S.ButtonsContainer>
          <Button type='submit'> Sign in </Button>
          <Button
            type='button'
            onClick={() => dispatch(startGoogleSignIn())}
            isGoogleSignIn
          >
            Sign in with Google
          </Button>
        </S.ButtonsContainer>
      </form>
    </S.Container>
  );
};

export default SignIn;
