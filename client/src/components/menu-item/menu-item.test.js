import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

import { render, screen } from '../../test-utils';
import MenuItem from './menu-item';

const history = createMemoryHistory();

describe('MenuItem component', () => {
  let mockItem;

  beforeEach(() => {
    mockItem = {
      title: 'SUMMER',
      imageUrl: 'www.testImage.com',
      id: 1,
      linkUrl: 'collection/summer',
    };
  });

  it('should render MenuItem component', () => {
    const { asFragment } = render(
      <Router history={history}>
        <MenuItem {...mockItem} />
      </Router>
    );

    expect(asFragment()).toMatchSnapshot();
    expect(screen.getByTestId('image')).toBeInTheDocument();
    expect(screen.getByTestId('title')).toHaveTextContent(/SUMMER/);
    expect(screen.getByText(/SEE COLLECTION/)).toBeInTheDocument();
  });

  it('should trigger history push on click', () => {
    render(
      <Router history={history}>
        <MenuItem {...mockItem} />
      </Router>
    );

    history.push = jest.fn();

    userEvent.click(screen.getByTestId('item'));

    expect(history.push).toHaveBeenCalledTimes(1);
    expect(history.push).toHaveBeenCalledWith('/collection/summer');
  });
});
