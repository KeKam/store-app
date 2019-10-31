import React, { useState } from 'react';

import FormInput from '../form-input/form-input';

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
    <div>
      <h2>I already have an account</h2>
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

        <input type='submit' value='Submit' />
      </form>
    </div>
  );
};

export default SignIn;
