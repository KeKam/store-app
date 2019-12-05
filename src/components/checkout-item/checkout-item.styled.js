import styled from 'styled-components';

export const CheckoutItem = () => {};

CheckoutItem.Container = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  width: 100%;
  min-height: 100px;
  padding: 15px 0;
  border-bottom: 1px solid darkgrey;
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
  width: 23%;
`;

CheckoutItem.Quantity = styled(CheckoutItem.Text)`
  padding-left: 20px;
`;

CheckoutItem.Button = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;
