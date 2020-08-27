import React from 'react';
import '@testing-library/jest-dom';

import { render, screen } from '../../test-utils';
import LoginPage from './login-page';

describe('LoginPage component', () => {
  it('should render LoginPage component', () => {
    const { asFragment } = render(<LoginPage />);

    expect(asFragment()).toMatchSnapshot();
    expect(
      screen.getByRole('heading', { name: 'I already have an account' })
    ).toBeInTheDocument();
    expect(
      screen.getByText('Sign in with your email and password')
    ).toBeInTheDocument();
    expect(screen.getByTestId('email-input')).toHaveDisplayValue('');
    expect(screen.getByTestId('password-input')).toHaveDisplayValue('');
    expect(screen.getByRole('button', { name: 'Sign in' })).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Sign in with Google' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'I do not have a account' })
    ).toBeInTheDocument();
    expect(
      screen.getByText('Sign up with your email and password')
    ).toBeInTheDocument();
    expect(screen.getByTestId('display-name')).toHaveDisplayValue('');
    expect(screen.getByTestId('email')).toHaveDisplayValue('');
    expect(screen.getByTestId('password')).toHaveDisplayValue('');
    expect(screen.getByTestId('confirm-password')).toHaveDisplayValue('');
    expect(screen.getByRole('button', { name: 'SIGN UP' })).toBeInTheDocument();
  });
});
