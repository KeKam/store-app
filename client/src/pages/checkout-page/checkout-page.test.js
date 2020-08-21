import React from 'react';
import '@testing-library/jest-dom';

import { render, screen } from '../../test-utils';
import CheckoutPage from './checkout-page';

describe('CheckoutPage component', () => {
  it('should render CheckoutPage component', () => {
    const { asFragment } = render(<CheckoutPage />);

    expect(asFragment()).toMatchSnapshot();
    expect(screen.getByText('Product')).toBeInTheDocument();
    expect(screen.getByText('Description')).toBeInTheDocument();
    expect(screen.getByText('Quantity')).toBeInTheDocument();
    expect(screen.getByText('Price')).toBeInTheDocument();
    expect(screen.getByText('Remove')).toBeInTheDocument();
    expect(screen.getByText('You have no added items')).toBeInTheDocument();
    expect(screen.getByTestId('cart-total')).toHaveTextContent('TOTAL : 0 €');
    expect(screen.getByTestId('warning')).toHaveTextContent(
      '*Please use this test credit card for payments on this site*4242 4242 4242 4242 - Exp: 01/21 - CVC: 543'
    );
    expect(screen.getByRole('button', { name: 'Pay Now' })).toBeInTheDocument();
  });

  it('should show CheckoutItem', () => {
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

    render(<CheckoutPage />, { initialState: { cart: mockState } });

    expect(screen.getByTestId('title')).toHaveTextContent('Winter falls');
    expect(screen.getByTestId('left-arrow')).toBeInTheDocument();
    expect(screen.getByTestId('quantity')).toHaveTextContent('2');
    expect(screen.getByTestId('right-arrow')).toBeInTheDocument();
    expect(screen.getByTestId('price')).toHaveTextContent('200 €');
    expect(screen.getByTestId('remove-button')).toBeInTheDocument();
    expect(screen.getByTestId('cart-total')).toHaveTextContent('TOTAL : 200 €');
    expect(
      screen.queryByText('You have no added items')
    ).not.toBeInTheDocument();
  });
});
