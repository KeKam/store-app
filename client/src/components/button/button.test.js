import React from 'react';
import '@testing-library/jest-dom';

import { render, screen } from '../../test-utils';
import Button from './button';

describe('Button component', () => {
  it('should render Button component', () => {
    const { asFragment } = render(<Button children='Sign in' />);

    expect(asFragment()).toMatchSnapshot();
    expect(screen.getByText('Sign in')).toBeInTheDocument();
  });
});
