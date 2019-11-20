import styled from 'styled-components';

import Button from '../button/button';

export const CartDropdown = () => {};

CartDropdown.Container = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 290px;
  height: 340px;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 80px;
  right: 0;
  z-index: 5;
`;

CartDropdown.Items = styled.div`
  display: flex;
  flex-direction: column;
  height: 240px;
  overflow: scroll
`;

CartDropdown.Button = styled(Button)`
  margin-top: auto;
`;
