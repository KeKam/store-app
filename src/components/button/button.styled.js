import styled from 'styled-components';

export const Button = () => {};

Button.Button = styled.button`
  font-size: 15px;
  width: auto;
  min-width: 165px;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  color: white;
  text-transform: uppercase;
  font-weight: bolder;
  border: none;
  cursor: pointer;
  background-color: black;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;
