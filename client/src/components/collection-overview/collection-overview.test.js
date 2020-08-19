import React from 'react';
import '@testing-library/jest-dom';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

import { render, screen } from '../../test-utils';
import CollectionOverview from './collection-overview';

const history = createMemoryHistory();

describe('CollectionOverview component', () => {
  it('should render CollectionOverview component', () => {
    const mockState = {
      categories: [
        {
          id: 1,
          title: 'SPRING',
          items: [
            {
              id: 1,
              imageUrl: 'www.testImage.com',
              name: 'Tulips',
              price: 20,
            },
          ],
        },
      ],
      isFetching: false,
    };

    const { asFragment } = render(
      <Router history={history}>
        <CollectionOverview />
      </Router>,
      {
        initialState: { collection: mockState },
      }
    );

    expect(asFragment()).toMatchSnapshot();
    expect(screen.getByRole('heading', { name: 'SPRING' })).toBeInTheDocument();
    expect(screen.getByTestId('image')).toBeInTheDocument();
    expect(screen.getByTestId('title')).toHaveTextContent('Tulips');
    expect(screen.getByTestId('price')).toHaveTextContent('20 €');
    expect(screen.getByTestId('link')).toHaveTextContent('Sign in required');
  });

  it('should render spinner component', () => {
    render(
      <Router history={history}>
        <CollectionOverview />
      </Router>,
      {
        initialState: { collection: { isFetching: true } },
      }
    );

    expect(screen.getByTestId('spinner')).toBeInTheDocument();
  });
});
