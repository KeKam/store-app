import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

import { render, screen } from '../../test-utils';
import { startSignOut } from '../../redux/user/user.actions';
import Header from './header';

const history = createMemoryHistory();

describe('Header component', () => {
  let mockState;

  beforeEach(() => {
    mockState = {
      currentUser: {
        email: 'testUser@gmail.com',
        password: 'testUser123',
      },
    };

    history.push = jest.fn();
  });

  it('should render Header component', () => {
    const { asFragment } = render(
      <Router history={history}>
        <Header />
      </Router>
    );

    expect(asFragment()).toMatchSnapshot();
    expect(screen.getByRole('link', { name: '4 SEASONS' })).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: 'COLLECTION' })
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'CONTACT' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'SIGN IN' })).toBeInTheDocument();
    expect(
      screen.queryByRole('link', { name: 'SIGN OUT' })
    ).not.toBeInTheDocument();
    expect(screen.queryByTestId('bag')).not.toBeInTheDocument();
  });

  it('should show sign out button and cart icon', () => {
    render(
      <Router history={history}>
        <Header />
      </Router>,
      { initialState: { user: mockState } }
    );

    expect(screen.getByRole('link', { name: 'SIGN OUT' })).toBeInTheDocument();
    expect(
      screen.queryByRole('link', { name: 'SIGN IN' })
    ).not.toBeInTheDocument();
    expect(screen.getByTestId('bag')).toBeInTheDocument();
    expect(screen.getByTestId('item-count')).toBeInTheDocument();
  });

  it('should history push on click', () => {
    render(
      <Router history={history}>
        <Header />
      </Router>
    );

    userEvent.click(screen.getByRole('link', { name: '4 SEASONS' }));

    expect(history.push).toHaveBeenCalledTimes(1);
    expect(history.push).toHaveBeenCalledWith('/');

    userEvent.click(screen.getByRole('link', { name: 'COLLECTION' }));

    expect(history.push).toHaveBeenCalledTimes(2);
    expect(history.push).toHaveBeenCalledWith('/collection');

    userEvent.click(screen.getByRole('link', { name: 'CONTACT' }));

    expect(history.push).toHaveBeenCalledTimes(3);
    expect(history.push).toHaveBeenCalledWith('/contact');

    userEvent.click(screen.getByRole('link', { name: 'SIGN IN' }));

    expect(history.push).toHaveBeenCalledTimes(4);
    expect(history.push).toHaveBeenCalledWith('/login');
  });

  it('should dispatch startSignOut action and history push on click', () => {
    const { getDispatchedActions } = render(
      <Router history={history}>
        <Header />
      </Router>,
      { initialState: { user: mockState } }
    );

    userEvent.click(screen.getByRole('link', { name: 'SIGN OUT' }));

    expect(getDispatchedActions()).toContainEqual(startSignOut());
    expect(history.push).toHaveBeenCalledTimes(1);
    expect(history.push).toHaveBeenCalledWith('/');
  });

  it('should show CartDropdown component', () => {
    render(
      <Router history={history}>
        <Header />
      </Router>,
      { initialState: { user: mockState } }
    );

    userEvent.click(screen.getByTestId('bag'));

    expect(screen.getByText('You have no added items')).toBeInTheDocument();
  });
});
