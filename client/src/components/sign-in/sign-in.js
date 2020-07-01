import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import FormInput from '../form-input/form-input';
import Button from '../button/button';
import {
  startGoogleSignIn,
  startEmailSignIn,
} from '../../redux/user/user.actions';
import { SignIn as S } from './sign-in.styled';

const SignIn = () => {
  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: '',
  });
  const dispatch = useDispatch();

  const { email, password } = userCredentials;

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(startEmailSignIn({ email, password }));
  };

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <S.Container>
      <S.Title>I already have an account</S.Title>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleOnSubmit}>
        <FormInput
          name='email'
          type='email'
          value={email}
          onChange={handleOnChange}
          label='Email'
          required
        />
        <FormInput
          name='password'
          type='password'
          value={password}
          onChange={handleOnChange}
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
