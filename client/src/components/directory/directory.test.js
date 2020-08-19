import React from 'react';
import '@testing-library/jest-dom';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

import { render, screen } from '../../test-utils';
import Directory from './directory';

const history = createMemoryHistory();

describe('Directory component', () => {
  it('should render Directory component', () => {
    const mockState = {
      sections: [
        {
          title: 'SPRING',
          imageUrl: 'www.testImage.com',
          id: 1,
          linkUrl: 'collection/spring',
        },
      ],
    };

    const { asFragment } = render(
      <Router history={history}>
        <Directory />
      </Router>,
      { initialState: { directory: mockState } }
    );

    expect(asFragment()).toMatchSnapshot();
    expect(screen.getByTestId('item')).toBeInTheDocument();
    expect(screen.getByTestId('image')).toBeInTheDocument();
    expect(screen.getByTestId('title')).toHaveTextContent('SPRING');
    expect(screen.getByText('SEE COLLECTION')).toBeInTheDocument();
  });
});
