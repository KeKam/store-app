import styled from 'styled-components';

export const SignIn = () => {};

SignIn.Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 440px;

  @media screen and (max-width: 800px) {
    width: 300px;
  }
`;

SignIn.Title = styled.h2`
  margin: 10px 0;
`;

SignIn.ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 800px) {
    display: block;
  }
`;
