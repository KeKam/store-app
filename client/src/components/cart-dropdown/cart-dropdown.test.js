import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

import { render, screen } from '../../test-utils';
import { toggleCart } from './../../redux/cart/cart.actions';
import CartDropdown from './cart-dropdown';

const history = createMemoryHistory();

describe('CartDropdown component', () => {
  beforeEach(() => {
    history.push = jest.fn();
  });

  it('should render CartDropdown component', () => {
    const { asFragment } = render(
      <Router history={history}>
        <CartDropdown />
      </Router>
    );
    expect(asFragment()).toMatchSnapshot();
    expect(screen.getByText('You have no added items')).toBeInTheDocument();
    expect(screen.getByText('GO TO CHECKOUT')).toBeInTheDocument();
  });

  it('should push history and dispatch toggleCart on click', () => {
    const { getDispatchedActions } = render(
      <Router history={history}>
        <CartDropdown />
      </Router>
    );

    userEvent.click(screen.getByText('GO TO CHECKOUT'));

    expect(history.push).toHaveBeenCalledTimes(1);
    expect(getDispatchedActions()).toContainEqual(toggleCart());
  });

  it('should render CartItem if cartItems is not an empty array', () => {
    const mockState = {
      cartItems: [
        {
          id: 1,
          name: 'Winter falls',
          imageUrl: 'www.testImage.com',
          price: 100,
          quantity: 2,
        },
      ],
    };

    render(
      <Router history={history}>
        <CartDropdown />
      </Router>,
      { initialState: { cart: mockState } }
    );

    expect(screen.getByText('Winter falls')).toBeInTheDocument();
    expect(
      screen.getByRole('img', { src: 'www.testImage.com' })
    ).toBeInTheDocument();
    expect(screen.getByText(`2 x 100 €`)).toBeInTheDocument();
  });
});
