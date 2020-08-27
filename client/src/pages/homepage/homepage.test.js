import React from 'react';
import '@testing-library/jest-dom';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

import { render, screen } from '../../test-utils';
import HomePage from './homepage';

const history = createMemoryHistory();

describe('HomePage component', () => {
  it('should render Homepage component', () => {
    const { asFragment } = render(
      <Router history={history}>
        <HomePage />
      </Router>
    );

    expect(asFragment()).toMatchSnapshot();
    expect(screen.getByText('SPRING')).toBeInTheDocument();
    expect(screen.getByText('SUMMER')).toBeInTheDocument();
    expect(screen.getByText('AUTUMN')).toBeInTheDocument();
    expect(screen.getAllByTestId('image')[0]).toBeInTheDocument();
    expect(screen.getAllByText('SEE COLLECTION')[0]).toBeInTheDocument();
  });
});
