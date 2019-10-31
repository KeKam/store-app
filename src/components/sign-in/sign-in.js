import React, { useState } from 'react';

import FormInput from '../form-input/form-input';
import Button from '../button/button';
import { SignIn as S } from './sign-in.styled';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    setEmail('');
    setPassword('');
  };

  const onEmailChange = e => {
    const inputValue = e.target.value;
    setEmail(inputValue);
  };

  const onPasswordChange = e => {
    const inputValue = e.target.value;
    setPassword(inputValue);
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
          label='email'
          required
        />
        <FormInput
          name='password'
          type='password'
          value={password}
          onChange={onPasswordChange}
          label='password'
          required
        />

        <Button type='submit'> Sign in </Button>
      </form>
    </S.Container>
  );
};

export default SignIn;
