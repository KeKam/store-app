import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import { removeItem } from '../../redux/cart/cart.actions';
import CartItem from './cart-item';

const mockStore = configureStore();
const mockItem = {
  id: 1,
  name: 'Winter falls',
  imageUrl: 'www.testImage.com',
  price: 100,
  quantity: 2,
};

describe('CartItem component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({ cartItems: [] });
    store.dispatch = jest.fn();

    render(
      <Provider store={store}>
        <CartItem item={mockItem} />
      </Provider>
    );
  });

  it('should render CartItem component', () => {
    expect(screen.getByText('Winter falls')).toBeInTheDocument();
    expect(screen.getByText(`2 x 100 €`)).toBeInTheDocument();
    expect(screen.getByText('✕')).toBeInTheDocument();
  });

  it('should dispatch removeItem action on click', () => {
    userEvent.click(screen.getByText('✕'));

    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith(removeItem(mockItem));
  });
});
