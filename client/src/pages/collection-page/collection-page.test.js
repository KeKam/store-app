import React from 'react';
import '@testing-library/jest-dom';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

import { render, screen } from '../../test-utils';
import {
  startFetchCollection,
  fetchCollectionSuccess,
} from '../../redux/collection/collection.actions';
import CollectionPage from './collection-page';

const history = createMemoryHistory();

describe('CollectionPage component', () => {
  const mockMatch = {
    isExact: true,
    params: {
      categoryId: 'spring',
    },
    path: '/collection',
    url: '/collection',
  };

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
    isFetching: false,
  };

  it('should render CollectionPage component', () => {
    const { asFragment } = render(
      <Router history={history}>
        <CollectionPage match={mockMatch} />
      </Router>
    );

    expect(asFragment()).toMatchSnapshot();
    expect(screen.getByTestId('container')).toBeInTheDocument();
  });

  it('should render CollectionCategoryPage component', () => {
    history.push('/collection/spring');

    render(
      <Router history={history}>
        <CollectionPage match={mockMatch} />
      </Router>,
      { initialState: { collection: mockState } }
    );

    expect(screen.getByRole('heading', { name: 'SPRING' })).toBeInTheDocument();
    expect(screen.getByTestId('image')).toBeInTheDocument();
    expect(screen.getByTestId('title')).toHaveTextContent('Tulips');
    expect(screen.getByTestId('price')).toHaveTextContent('20 €');
    expect(screen.getByTestId('link')).toHaveTextContent('Sign in required');
  });

  it('should dispatch startFetchCollection action on render', () => {
    const { getDispatchedActions } = render(
      <Router history={history}>
        <CollectionPage match={mockMatch} />
      </Router>
    );

    expect(getDispatchedActions()).toContainEqual(startFetchCollection());
  });

  it('should render CollectionOverview component', () => {
    const collection = {
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
    };

    history.push('/collection');

    const { dispatch } = render(
      <Router history={history}>
        <CollectionPage match={mockMatch} />
      </Router>,
      { initialState: { collection: mockState } }
    );

    dispatch(fetchCollectionSuccess(collection));

    expect(screen.getByRole('heading', { name: 'SPRING' })).toBeInTheDocument();
    expect(screen.getByTestId('image')).toBeInTheDocument();
    expect(screen.getByTestId('title')).toHaveTextContent('Tulips');
    expect(screen.getByTestId('price')).toHaveTextContent('20 €');
    expect(screen.getByTestId('link')).toHaveTextContent('Sign in required');
  });
});
