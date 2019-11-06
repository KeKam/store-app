import styled from 'styled-components';

export const Button = () => {};

Button.Button = styled.button`
  display: flex;
  justify-content: center;
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
  background-color: ${props => (props.isGoogleSignIn ? '#4285f4' : 'black')};

  &:hover {
    background-color: ${props => (props.isGoogleSignIn ? '#357ae8' : 'white')};
    color: ${props => (props.isGoogleSignIn ? 'white' : 'black')};
    border: ${props => (props.isGoogleSignIn ? 'none' : '1px solid black')};
  }
`;
