import React, { useState } from 'react';

import FormInput from '../form-input/form-input';
import Button from '../button/button';
import { signInWithGoogle, auth } from '../../firebase/firebase';
import { SignIn as S } from './sign-in.styled';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async e => {
    e.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
      resetFields();
    } catch (error) {
      console.log(error);
    }
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
          <Button onClick={signInWithGoogle} isGoogleSignIn>
            Sign in with Google
          </Button>
        </S.ButtonsContainer>
      </form>
    </S.Container>
  );
};

export default SignIn;
