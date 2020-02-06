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
  background-color: white;
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
  overflow: scroll;
`;

CartDropdown.Text = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

CartDropdown.Button = styled(Button)`
  margin-top: auto;
`;
