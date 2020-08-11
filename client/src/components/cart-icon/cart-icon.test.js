import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import { render, screen } from '../../test-utils';
import { toggleCart } from '../../redux/cart/cart.actions';
import CartIcon from '../cart-icon/cart-icon';

describe('CartIcon component', () => {
  it('should render CartIcon component', () => {
    const { asFragment } = render(<CartIcon hasScrolledDown={false} />);

    expect(asFragment()).toMatchSnapshot();
    expect(screen.getByTestId('bag')).toBeInTheDocument();
    expect(screen.getByTestId('bag')).toHaveTextContent('shopping-bag.svg');
    expect(screen.getByTestId('item-count')).toHaveTextContent('0');
  });

  it('should render extended icon', () => {
    render(<CartIcon hasScrolledDown={true} />);

    expect(screen.getByTestId('bag-extended')).toBeInTheDocument();
    expect(screen.getByTestId('bag-extended')).toHaveTextContent(
      'shopping-bag-extended.svg'
    );
  });

  it('should render amount of cart items', () => {
    const mockState = {
      cartItems: [
        {
          id: 1,
          name: 'Winter falls',
          imageUrl: 'www.testImage.com',
          price: 100,
          quantity: 2,
        },
        {
          id: 2,
          name: 'Sunflower',
          imageUrl: 'www.testImage.com',
          price: 200,
          quantity: 3,
        },
      ],
    };

    render(<CartIcon />, { initialState: { cart: mockState } });

    expect(screen.getByTestId('item-count')).toHaveTextContent('5');
  });

  it('should dispatch toggleCart action on click', () => {
    const { getDispatchedActions } = render(<CartIcon />);

    userEvent.click(screen.getByTestId('bag'));

    expect(getDispatchedActions()).toContainEqual(toggleCart());
  });
});
