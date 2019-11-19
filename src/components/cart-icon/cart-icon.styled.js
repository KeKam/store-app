import styled from 'styled-components';

import { ReactComponent as ShoppingBagIcon } from '../../assets/shopping-bag.svg';

export const CartIcon = () => {};

CartIcon.Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 45px;
  height: 45px;
  cursor: pointer;
`;

CartIcon.ShoppingBag = styled(ShoppingBagIcon)`
  width: 30px;
  height: 30px;
`;

CartIcon.Number = styled.span`
  position: absolute;
  font-size: 13px;
  font-weight: bold;
  bottom: 10px;
`;
