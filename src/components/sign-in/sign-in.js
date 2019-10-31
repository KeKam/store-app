import React, { useState } from 'react';

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
        <label>Email</label>
        <input
          name='email'
          type='email'
          value={email}
          onChange={onEmailChange}
          required
        />
        <input
          name='password'
          type='password'
          value={password}
          onChange={onPasswordChange}
          required
        />
        <label>Password</label>
        <input type='submit' value='Submit' />
      </form>
    </div>
  );
};

export default SignIn;
