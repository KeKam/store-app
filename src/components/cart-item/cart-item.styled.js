import styled from 'styled-components';

export const CartItem = () => {};

CartItem.Container = styled.div`
  display: flex;
  height: 85px;
  width: 100%;
  margin-bottom: 12px;
`;

CartItem.Image = styled.img`
  width: 35%;
  border: 1px solid #e8eaed;
`;

CartItem.Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 70%;
  padding: 10px 20px;
`;

CartItem.Text = styled.span`
  color: #e8eaed;
  margin-bottom: 5px;
`;
