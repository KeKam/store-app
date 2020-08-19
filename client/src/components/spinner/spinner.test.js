import React from 'react';
import '@testing-library/jest-dom';

import { render, screen } from '../../test-utils';
import Spinner from './spinner';

describe('Spinner component', () => {
  it('should render Spinner component', () => {
    const { asFragment } = render(<Spinner />);

    expect(asFragment()).toMatchSnapshot();
    expect(screen.getByTestId('spinner')).toBeInTheDocument();
  });
});
