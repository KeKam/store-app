import styled, { css } from 'styled-components';

const normalStyles = css`
  color: #e8eaed;
  background-color: black;
  border: none;

  &:hover {
    color: black;
    background-color: #e8eaed;
    border: 1px solid black;
  }
`;

const invertedStyles = css`
  color: black;
  background-color: #e8eaed;
  border: 1px solid black;

  &:hover {
    color: #e8eaed;
    background-color: black;
    border: none;
  }
`;

const googleStyles = css`
  color: #e8eaed;
  background-color: #4285f4;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

const getStyles = props => {
  if (props.isGoogleSignIn) {
    return googleStyles;
  } else {
    return props.inverted ? invertedStyles : normalStyles;
  }
};

export const Button = () => {};

Button.Container = styled.button`
  display: flex;
  justify-content: center;
  font-family: 'Gruppo', cursive;
  font-size: 15px;
  width: auto;
  min-width: 165px;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  color: #e8eaed;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  cursor: pointer;

  ${getStyles}

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;
