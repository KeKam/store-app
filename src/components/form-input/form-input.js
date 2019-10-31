import React from 'react';

import { FormInput as S } from './form-input.styled';

const FormInput = ({ label, value, ...inputProps }) => {
  return (
    <S.Container>
      <S.Input {...inputProps} />
      {label ? <S.Label value={value}>{label}</S.Label> : ''}
    </S.Container>
  );
};

export default FormInput;
