import React from 'react';
import '@testing-library/jest-dom';

import { render, screen } from '../../test-utils';
import StripeCheckoutButton from './stripe-checkout-button';

describe('StripeCheckoutButton component', () => {
  it('should render StripeCheckoutComponent', () => {
    const { asFragment } = render(<StripeCheckoutButton />);

    expect(asFragment()).toMatchSnapshot();
    expect(screen.getByRole('button', { name: 'Pay Now' })).toHaveClass(
      'StripeCheckout'
    );
    expect(screen.getByText('Pay Now')).toBeInTheDocument();
  });
});
