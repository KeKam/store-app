import styled from 'styled-components';

import Button from '../button/button';

export const CartDropdown = () => {};

CartDropdown.Container = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  font-weight: bold;
  width: 290px;
  height: 340px;
  padding: 20px;
  border: 1px solid black;
  background-color: #363739;
  top: 80px;
  right: 0;
  z-index: 5;

  @media screen and (max-width: 800px) {
    top: 120px;
  }
`;

CartDropdown.Items = styled.div`
  display: flex;
  flex-direction: column;
  height: 240px;
  overflow-y: auto;
  overflow-x: hidden;
`;

CartDropdown.Text = styled.span`
  font-size: 18px;
  color: #e8eaed;
  margin: 50px auto;
`;

CartDropdown.Button = styled(Button)`
  margin-top: auto;
`;
