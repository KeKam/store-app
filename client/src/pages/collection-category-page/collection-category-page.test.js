import React from 'react';
import '@testing-library/jest-dom';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

import { render, screen } from '../../test-utils';
import CollectionCategoryPage from './collection-category-page';

const history = createMemoryHistory();

describe('CollectionCategoryPage component', () => {
  let mockMatch;

  beforeEach(() => {
    mockMatch = {
      isExact: true,
      params: {
        categoryId: 'spring',
      },
      path: '/collection/:categoryId',
      url: '/collection/spring',
    };
  });

  it('should render CollectionCategoryPage component', () => {
    const mockState = {
      categories: {
        spring: {
          id: 1,
          items: [
            {
              id: 1,
              imageUrl: 'www.testImage.com',
              name: 'Tulips',
              price: 20,
            },
          ],
          routeName: 'spring',
          title: 'Spring',
        },
      },
    };

    const { asFragment } = render(
      <Router history={history}>
        <CollectionCategoryPage match={mockMatch} />
      </Router>,
      { initialState: { collection: mockState } }
    );

    expect(asFragment()).toMatchSnapshot();
    expect(screen.getByRole('heading', { name: 'SPRING' })).toBeInTheDocument();
    expect(screen.getByTestId('image')).toBeInTheDocument();
    expect(screen.getByTestId('title')).toHaveTextContent('Tulips');
    expect(screen.getByTestId('price')).toHaveTextContent('20 €');
    expect(screen.getByTestId('link')).toHaveTextContent('Sign in required');
    expect(screen.queryByTestId('spinner')).not.toBeInTheDocument();
  });

  it('should render Spinner component', () => {
    render(
      <Router history={history}>
        <CollectionCategoryPage match={mockMatch} />
      </Router>
    );

    expect(screen.getByTestId('spinner')).toBeInTheDocument();
  });
});
