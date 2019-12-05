import styled from 'styled-components';

export const CheckoutPage = () => {};

CheckoutPage.Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 55%;
  min-height: 90vh;
  margin: 50px auto 0;
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
`;

CheckoutPage.TotalContainer = styled.div`
  font-size: 36px;
  margin-top: 30px;
  margin-left: auto;
`;
