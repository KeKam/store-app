import React, { useState } from 'react';

import FormInput from '../form-input/form-input';
import Button from '../button/button';
import { auth, createUserProfileDocument } from '../../firebase/firebase';
import { SignUp as S } from './sign-up.styled';

const SignUp = () => {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const onSubmit = async e => {
    e.preventDefault();
    resetFields();

    if (password !== confirmPassword) {
      alert('Password does not match');
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });
      // resetFields();

    } catch (error) {
      console.error(error);
    }
  };

  const onDisplayNameChange = e => {
    const inputValue = e.target.value;
    setDisplayName(inputValue);
  };

  const onEmailChange = e => {
    const inputValue = e.target.value;
    setEmail(inputValue);
  };

  const onPasswordChange = e => {
    const inputValue = e.target.value;
    setPassword(inputValue);
  };

  const onConfirmPasswordChange = e => {
    const inputValue = e.target.value;
    setConfirmPassword(inputValue);
  };

  const resetFields = () => {
    setDisplayName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    console.log(email);
  };

  return (
    <S.Container>
      <S.Title>I do not have a account</S.Title>
      <span>Sign up with your email and password</span>

      <form onSubmit={onSubmit}>
        <FormInput
          name='displayName'
          type='text'
          value={displayName}
          onChange={onDisplayNameChange}
          label='Display Name'
          required
        />
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
        <FormInput
          name='confirmPassword'
          type='password'
          value={confirmPassword}
          onChange={onConfirmPasswordChange}
          label='Confirm Password'
          required
        />

        <Button type='submit'> SIGN UP </Button>
      </form>
    </S.Container>
  );
};

export default SignUp;
