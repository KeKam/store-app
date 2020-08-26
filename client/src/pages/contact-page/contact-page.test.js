import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import { render, screen, fireEvent } from '../../test-utils';
import { startSendForm } from '../../redux/form/form.actions';
import ContactPage from './contact-page';

describe('ContactPage component', () => {
  it('should render ContactPage component', () => {
    const { asFragment } = render(<ContactPage />);

    expect(asFragment()).toMatchSnapshot();
    expect(
      screen.getByRole('heading', { name: 'Need to contact us?' })
    ).toBeInTheDocument();
    expect(screen.getByText('Please use the form below')).toBeInTheDocument();
    expect(screen.getByTestId('name-input')).toHaveDisplayValue('');
    expect(screen.getByTestId('email-input')).toHaveDisplayValue('');
    expect(screen.getByTestId('description-input')).toHaveDisplayValue('');
    expect(screen.getByRole('button', { name: 'SEND' })).toBeInTheDocument();
    expect(screen.queryByTestId('spinner')).not.toBeInTheDocument();
    expect(
      screen.queryByText('Something went wrong, please try again')
    ).not.toBeInTheDocument();
  });

  it('should change display value for name on change', () => {
    render(<ContactPage />);

    userEvent.type(screen.getByTestId('name-input'), 'TestUser');

    expect(screen.getByTestId('name-input')).toHaveDisplayValue('TestUser');
  });

  it('should change display value for email on change', () => {
    render(<ContactPage />);

    userEvent.type(screen.getByTestId('email-input'), 'testUser@gmail.com');

    expect(screen.getByTestId('email-input')).toHaveDisplayValue(
      'testUser@gmail.com'
    );
  });

  it('should change display value for description on change', () => {
    render(<ContactPage />);

    fireEvent.change(screen.getByTestId('description-input'), {
      target: { value: 'Need help' },
    });

    expect(screen.getByTestId('description-input')).toHaveDisplayValue(
      'Need help'
    );
  });

  it('should dispatch startSendForm action on click', () => {
    const mockState = {
      name: '',
      email: '',
      description: '',
    };

    const { getDispatchedActions } = render(<ContactPage />);

    userEvent.click(screen.getByRole('button', { name: 'SEND' }));

    expect(getDispatchedActions()).toContainEqual(startSendForm(mockState));
  });

  it('should render Spinner component', () => {
    const mockState = {
      formWasSent: null,
      isSending: true,
      error: null,
    };

    render(<ContactPage />, { initialState: { form: mockState } });

    expect(screen.getByTestId('spinner')).toBeInTheDocument();
    expect(screen.queryByText('Need to contact us?')).not.toBeInTheDocument();
  });

  it('should render confirmation message', () => {
    const mockState = {
      formWasSent: {
        name: 'TestUser',
        email: 'testuser@gmail.com',
        description: 'I need to test',
      },
      isSending: false,
      error: null,
    };

    render(<ContactPage />, { initialState: { form: mockState } });

    expect(screen.getByText('Message sent')).toBeInTheDocument();
    expect(
      screen.getByText('We will get back to you soon')
    ).toBeInTheDocument();
    expect(screen.queryByText('Need to contact us?')).not.toBeInTheDocument();
    expect(screen.queryByTestId('spinner')).not.toBeInTheDocument();
  });

  it('should render error message', () => {
    const mockState = {
      formWasSent: null,
      isSending: false,
      error: 'Something wrong',
    };

    render(<ContactPage />, { initialState: { form: mockState } });

    expect(
      screen.getByText('Something went wrong, please try again')
    ).toBeInTheDocument();
  });
});
