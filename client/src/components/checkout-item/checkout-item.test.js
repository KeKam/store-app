import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import { render, screen } from '../../test-utils';
import {
  removeFromCart,
  addToCart,
  removeItem,
} from '../../redux/cart/cart.actions';
import CheckoutItem from './checkout-item';

describe('CheckoutItem component', () => {
  const mockState = {
    cartItems: [
      {
        id: 1,
        name: 'Winter falls',
        imageUrl: 'www.testImage.com',
        price: 100,
        quantity: 3,
      },
    ],
  };
  const mockCartItem = mockState.cartItems[0];

  it('should render CheckoutItem component', () => {
    const { asFragment } = render(<CheckoutItem cartItem={mockCartItem} />);

    expect(asFragment()).toMatchSnapshot();
    expect(
      screen.getByRole('img', { src: 'www.testImage.com' })
    ).toBeInTheDocument();
    expect(screen.getByTestId('title')).toHaveTextContent('Winter falls');
    expect(screen.getByTestId('left-arrow')).toHaveTextContent('❮');
    expect(screen.getByTestId('quantity')).toHaveTextContent('3');
    expect(screen.getByTestId('right-arrow')).toHaveTextContent('❯');
    expect(screen.getByTestId('price')).toHaveTextContent('300 €');
    expect(screen.getByTestId('remove-button')).toHaveTextContent('✕');
  });

  it('should dispatch removeFromCart action on left arrow click', () => {
    const { getState, getDispatchedActions, rerenderWithRedux } = render(
      <CheckoutItem cartItem={mockCartItem} />,
      {
        initialState: { cart: mockState },
      }
    );

    userEvent.click(screen.getByTestId('left-arrow'));
    rerenderWithRedux(<CheckoutItem cartItem={getState().cart.cartItems[0]} />);

    expect(getDispatchedActions()).toContainEqual(removeFromCart(mockCartItem));
    expect(screen.getByText('2')).toBeInTheDocument();
  });

  it('should dispatch addToCart action on right arrow click', () => {
    const { getState, getDispatchedActions, rerenderWithRedux } = render(
      <CheckoutItem cartItem={mockCartItem} />,
      {
        initialState: { cart: mockState },
      }
    );

    userEvent.click(screen.getByTestId('right-arrow'));
    rerenderWithRedux(<CheckoutItem cartItem={getState().cart.cartItems[0]} />);

    expect(getDispatchedActions()).toContainEqual(addToCart(mockCartItem));
    expect(screen.getByText('4')).toBeInTheDocument();
  });

  it('should dispatch removeItem action on click', () => {
    const { getDispatchedActions } = render(
      <CheckoutItem cartItem={mockCartItem} />,
      {
        initialState: { cart: mockState },
      }
    );

    userEvent.click(screen.getByTestId('remove-button'));

    expect(getDispatchedActions()).toContainEqual(removeItem(mockCartItem));
  });
});
