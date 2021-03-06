import styled from 'styled-components';

export const CheckoutPage = () => {};

CheckoutPage.Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 55%;
  min-height: 90vh;
  margin: 120px auto 0;

  button {
    margin-top: 50px;
    margin-left: auto;
  }

  @media screen and (max-width: 800px) {
    width: 95%;
    margin: 100px auto 0;
    padding: 0px 10px 10px 10px;
  }
`;

CheckoutPage.Header = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  height: 40px;
  border-bottom: 1px groove darkgrey;

  @media screen and (max-width: 800px) {
    margin-top: 18.76px;
  }
`;

CheckoutPage.Block = styled.div`
  width: 23%;
  font-weight: bold;
  color: #e8eaed;

  &:last-child {
    width: 8%;
  }

  @media screen and (max-width: 800px) {
    font-size: 14px;
    width: 22%;
    margin: 0 10px;

    &:last-child {
      width: 12%;
    }
  }
`;

CheckoutPage.TotalContainer = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin-top: 30px;
  margin-left: auto;
  color: #e8eaed;

  @media screen and (max-width: 800px) {
    font-size: 28px;
  }
`;

CheckoutPage.Warning = styled.div`
  color: red;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-top: 30px;

  @media screen and (max-width: 800px) {
    font-size: 17px;
  }
`;

CheckoutPage.Text = styled.span`
  font-size: 18px;
  color: #e8eaed;
  margin: 50px auto;
  font-weight: bold;
`;
