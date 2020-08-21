import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import { render, screen } from '../../test-utils';
import { startSignUp } from '../../redux/user/user.actions';
import SignUp from './sign-up';

describe('SignUp component', () => {
  it('should render SignUp component', () => {
    const { asFragment } = render(<SignUp />);

    expect(asFragment()).toMatchSnapshot();
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

  it('should change display value for display name on change', () => {
    render(<SignUp />);

    userEvent.type(screen.getByTestId('display-name'), 'testUser@gmail.com');

    expect(screen.getByTestId('display-name')).toHaveDisplayValue('testUser');
  });

  it('should change display value for email on change', () => {
    render(<SignUp />);

    userEvent.type(screen.getByTestId('email'), 'testUser@gmail.com');

    expect(screen.getByTestId('email')).toHaveDisplayValue(
      'testUser@gmail.com'
    );
  });

  it('should change display value for password on change', () => {
    render(<SignUp />);

    userEvent.type(screen.getByTestId('password'), 'testuser123');

    expect(screen.getByTestId('password')).toHaveDisplayValue('testuser123');
  });

  it('should change display value for confirm password on change', () => {
    render(<SignUp />);

    userEvent.type(screen.getByTestId('confirm-password'), 'testuser123');

    expect(screen.getByTestId('confirm-password')).toHaveDisplayValue(
      'testuser123'
    );
  });

  it('should dispatch startSignUp action on click', () => {
    const mockUserInformation = {
      displayName: '',
      email: '',
      password: '',
    };

    const { getDispatchedActions } = render(<SignUp />);

    userEvent.click(screen.getByRole('button', { name: 'SIGN UP' }));

    expect(getDispatchedActions()).toContainEqual(
      startSignUp(mockUserInformation)
    );
  });
});
