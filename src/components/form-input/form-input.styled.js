import styled from 'styled-components';

export const FormInput = () => {};

FormInput.Container = styled.div`
  position: relative;
  margin: 45px 0;

  input[type='password'] {
    letter-spacing: 0.3em;
  }
`;

FormInput.Input = styled.input`
  display: block;
  width: 100%;
  padding: 10px 10px 10px 5px;
  margin: 25px 0;
  font-size: 18px;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid grey;
  background: none;
  background-color: white;

  &:focus {
    outline: none;
  }

  &:focus ~ label {
    top: -14px;
    font-size: 12px;
    color: grey;
  }
`;

FormInput.Label = styled.label`
  position: absolute;
  font-size: ${props => (props.value.length ? '12px' : '16px')};
  color: grey;
  pointer-events: none;
  left: 5px;
  top: ${props => (props.value.length ? '-14px' : '10px')};
  transition: 300ms ease all;
`;
