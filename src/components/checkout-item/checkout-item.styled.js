import styled from 'styled-components';

export const CheckoutItem = () => {};

CheckoutItem.Container = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  width: 100%;
  min-height: 100px;
  padding: 15px 0;
  border-bottom: 1px solid darkgrey;

  @media screen and (max-width: 800px) {
    font-size: 17px;
  }
`;

CheckoutItem.ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;
`;

CheckoutItem.Image = styled.img`
  width: 100%;
  height: 100%;
`;

CheckoutItem.Text = styled.span`
  width: 24%;

  @media screen and (max-width: 800px) {
    display: flex;
    justify-content: center;
    width: 22%;
  }
`;

CheckoutItem.QuantityContainer = styled(CheckoutItem.Text)`
  display: flex;

  span {
    margin: 0 10px;
  }

  @media screen and (max-width: 800px) {
    span {
      margin: 0 5px;
    }
  }
`;

CheckoutItem.Arrow = styled.div`
  cursor: pointer;
`;

CheckoutItem.Button = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;
