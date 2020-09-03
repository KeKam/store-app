import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import { removeItem } from '../../redux/cart/cart.actions';
import { render, screen } from '../../test-utils';
import CartItem from './cart-item';

describe('CartItem component', () => {
  const mockItem = {
    id: 1,
    name: 'Winter falls',
    imageUrl: 'www.testImage.com',
    price: 100,
    quantity: 2,
  };

  it('should render CartItem component', () => {
    const { asFragment } = render(<CartItem item={mockItem} />);

    expect(asFragment()).toMatchSnapshot();
    expect(screen.getByTestId('title')).toHaveTextContent('Winter falls');
    expect(
      screen.getByRole('img', { src: 'www.testImage.com' })
    ).toBeInTheDocument();
    expect(screen.getByTestId('price')).toHaveTextContent(`2 x 100 €`);
    expect(screen.getByText('✕')).toBeInTheDocument();
  });

  it('should dispatch removeItem action on click', () => {
    const { getDispatchedActions } = render(<CartItem item={mockItem} />);

    userEvent.click(screen.getByText('✕'));

    expect(getDispatchedActions()).toContainEqual(removeItem(mockItem));
  });
});
