import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

import { render, screen } from '../../test-utils';
import { addToCart } from '../../redux/cart/cart.actions';
import CollectionItem from '../collection-item/collection-item';

const history = createMemoryHistory();

describe('CollectionItem component', () => {
  let mockItem;
  let mockState;

  beforeEach(() => {
    mockItem = {
      name: 'Winter falls',
      imageUrl: 'www.testImage.com',
      price: 100,
    };

    mockState = {
      currentUser: {
        email: 'testUser@gmail.com',
        password: 'testUser123',
      },
    };
  });

  it('should render CollectionItem component', () => {
    const history = createMemoryHistory();
    const { asFragment } = render(
      <Router history={history}>
        <CollectionItem item={mockItem} />
      </Router>
    );

    expect(asFragment()).toMatchSnapshot();
    expect(screen.getByTestId('image')).toBeInTheDocument();
    expect(screen.getByTestId('title')).toHaveTextContent('Winter fall');
    expect(screen.getByTestId('price')).toHaveTextContent('100 €');
    expect(screen.getByTestId('link')).toHaveTextContent('Sign in required');
    expect(screen.queryByTestId('button')).not.toBeInTheDocument();
  });

  it('should trigger history push on click', () => {
    render(
      <Router history={history}>
        <CollectionItem item={mockItem} />
      </Router>
    );

    history.push = jest.fn();

    userEvent.click(screen.getByText('Sign in required'));

    expect(history.push).toHaveBeenCalledTimes(1);
    expect(history.push).toHaveBeenCalledWith('/login');
  });

  it('should show add to cart button if there is a user', () => {
    render(
      <Router history={history}>
        <CollectionItem item={mockItem} />
      </Router>,
      { initialState: { user: mockState } }
    );

    expect(screen.getByTestId('button')).toHaveTextContent('ADD TO CART');
    expect(screen.queryByTestId('link')).not.toBeInTheDocument();
  });

  it('should dispatch addToCart action on click', () => {
    const { getDispatchedActions } = render(
      <Router history={history}>
        <CollectionItem item={mockItem} />
      </Router>,
      { initialState: { user: mockState } }
    );

    userEvent.click(screen.getByTestId('button'));

    expect(getDispatchedActions()).toContainEqual(addToCart(mockItem));
  });
});
