import styled from 'styled-components';

export const CheckoutPage = () => {};

CheckoutPage.Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 55%;
  min-height: 90vh;
  margin: 50px auto 0;

  button {
    margin-top: 50px;
    margin-left: auto;
  }

  @media screen and (max-width: 800px) {
    width: 90%;
  }
`;

CheckoutPage.Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 40px;
  border-bottom: 1px solid darkgrey;
`;

CheckoutPage.Block = styled.div`
  width: 23%;

  &:last-child {
    width: 8%;
  }

  @media screen and (max-width: 800px) {
    width: 22%;
    margin: 0 7px;

    &:last-child {
      width: 12%;
    }
  }
`;

CheckoutPage.TotalContainer = styled.div`
  font-size: 36px;
  margin-top: 30px;
  margin-left: auto;
`;

CheckoutPage.Warning = styled.div`
  color: red;
  font-size: 24px;
  text-align: center;
  margin-top: 40px;
`;
