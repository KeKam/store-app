import React from 'react';
import '@testing-library/jest-dom';

import { render, screen } from '../../test-utils';
import FormInput from './form-input';

describe('FormInput component', () => {
  it('should render FormInput component', () => {
    const mockInputProps = {
      label: 'Email',
      value: 'testUser@gmail.com',
      onChange: jest.fn(),
    };
    const { asFragment } = render(<FormInput {...mockInputProps} />);

    expect(asFragment()).toMatchSnapshot();
    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: '' })).toHaveValue(
      'testUser@gmail.com'
    );
  });
});
