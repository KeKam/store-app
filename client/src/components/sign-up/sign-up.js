import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import FormInput from '../form-input/form-input';
import Button from '../button/button';
import { SignUp as S } from './sign-up.styled';
import { startSignUp } from '../../redux/user/user.actions';

const SignUp = () => {
  const [userInformation, setUserInformation] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const dispatch = useDispatch();

  const { displayName, email, password, confirmPassword } = userInformation;

  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Password does not match');
      return;
    }

    dispatch(startSignUp({ displayName, email, password }));
  };

  const onInputChange = (e) => {
    const { value, name } = e.target;
    setUserInformation({ ...userInformation, [name]: value });
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
          onChange={onInputChange}
          label='Display Name'
          required
        />
        <FormInput
          name='email'
          type='email'
          value={email}
          onChange={onInputChange}
          label='Email'
          required
        />
        <FormInput
          name='password'
          type='password'
          value={password}
          onChange={onInputChange}
          label='Password'
          required
        />
        <FormInput
          name='confirmPassword'
          type='password'
          value={confirmPassword}
          onChange={onInputChange}
          label='Confirm Password'
          required
        />

        <Button type='submit'> SIGN UP </Button>
      </form>
    </S.Container>
  );
};

export default SignUp;
