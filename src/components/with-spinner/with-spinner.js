import React from 'react';

import { WithSpinner as S } from './with-spinner.styled';

const WithSpinner = WrappedComponent => {
  const Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <S.Container>
        <S.Spinner />
      </S.Container>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };
  return Spinner;
};

export default WithSpinner;
