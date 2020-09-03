import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import { Router, Route } from 'react-router-dom';

import { render, screen } from '../../test-utils';
import CollectionPreview from './collection-preview';

const history = createMemoryHistory({ initialEntries: ['/collection'] });

describe('CollectionPreview component', () => {
  const mockCollectionProps = {
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
    routeName: 'spring',
  };

  it('should render CollectionPreview component', () => {
    const { asFragment } = render(
      <Router history={history}>
        <CollectionPreview {...mockCollectionProps} />
      </Router>
    );

    expect(asFragment()).toMatchSnapshot();
    expect(screen.getByRole('heading', { name: 'SPRING' })).toBeInTheDocument();
    expect(screen.getByTestId('image')).toBeInTheDocument();
    expect(screen.getByTestId('title')).toHaveTextContent('Tulips');
    expect(screen.getByTestId('price')).toHaveTextContent('20 €');
    expect(screen.getByTestId('link')).toHaveTextContent('Sign in required');
  });

  it('should history push on click', () => {
    render(
      <Router history={history}>
        <Route path='/collection'>
          <CollectionPreview {...mockCollectionProps} />
        </Route>
      </Router>
    );

    history.push = jest.fn();

    userEvent.click(screen.getByRole('heading', { name: 'SPRING' }));

    expect(history.push).toHaveBeenCalledTimes(1);
    expect(history.push).toHaveBeenCalledWith('/collection/spring');
  });
});
