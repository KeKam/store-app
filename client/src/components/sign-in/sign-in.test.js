import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import { render, screen } from '../../test-utils';
import {
  startEmailSignIn,
  startGoogleSignIn,
} from '../../redux/user/user.actions';
import SignIn from './sign-in';

describe('SignIn component', () => {
  it('should render SignIn component', () => {
    const { asFragment } = render(<SignIn />);

    expect(asFragment()).toMatchSnapshot();
    expect(screen.getByText('I already have an account')).toBeInTheDocument();
    expect(
      screen.getByText('Sign in with your email and password')
    ).toBeInTheDocument();
    expect(screen.getByTestId('email-input')).toHaveDisplayValue('');
    expect(screen.getByTestId('password-input')).toHaveDisplayValue('');
    expect(screen.getByRole('button', { name: 'Sign in' })).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Sign in with Google' })
    ).toBeInTheDocument();
  });

  it('should change email value on change', () => {
    render(<SignIn />);

    userEvent.type(screen.getByTestId('email-input'), 'testUser@gmail.com');

    expect(screen.getByTestId('email-input')).toHaveDisplayValue(
      'testUser@gmail.com'
    );
  });

  it('should change password value on change', () => {
    render(<SignIn />);

    userEvent.type(screen.getByTestId('password-input'), 'testuser123');

    expect(screen.getByTestId('password-input')).toHaveDisplayValue(
      'testuser123'
    );
  });

  it('should dispatch startEmailSignin on click', () => {
    const mockUserCredentials = {
      email: '',
      password: '',
    };
    const { getDispatchedActions } = render(<SignIn />);

    userEvent.click(screen.getByRole('button', { name: 'Sign in' }));

    expect(getDispatchedActions()).toContainEqual(
      startEmailSignIn(mockUserCredentials)
    );
  });

  it('should dispatch startGoogleSignin on click', () => {
    const { getDispatchedActions } = render(<SignIn />);

    userEvent.click(
      screen.getByRole('button', { name: 'Sign in with Google' })
    );

    expect(getDispatchedActions()).toContainEqual(startGoogleSignIn());
  });
});
