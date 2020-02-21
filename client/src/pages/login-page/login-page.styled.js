import styled from 'styled-components';

export const LoginPage = () => {};

LoginPage.Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 850px;
  margin: 130px auto;
  font-weight: bold;
  color: #e8eaed;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    width: unset;
    align-items: center;
    padding: 0px 10px;

    > *:first-child {
      margin-bottom: 50px;
    }
  }
`;
