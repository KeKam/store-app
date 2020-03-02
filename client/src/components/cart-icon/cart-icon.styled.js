import styled from 'styled-components';

import { ReactComponent as ShoppingBagIcon } from '../../assets/shopping-bag.svg';
import { ReactComponent as ShoppingBagExtendedIcon } from '../../assets/shopping-bag-extended.svg';

export const CartIcon = () => {};

CartIcon.Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 45px;
  height: 45px;
  margin-right: ${props => (props.hasScrolledDown ? '25px' : '0px')};
  cursor: pointer;

  span {
    color: ${props => (props.hasScrolledDown ? '#202124' : '#e8eaed')};
  }

  @media screen and (max-width: 800px) {
    margin-right: 0;
  }
`;

CartIcon.ShoppingBag = styled(ShoppingBagIcon)`
  width: 30px;
  height: 30px;
`;

CartIcon.ShoppingBagExtended = styled(ShoppingBagExtendedIcon)`
  width: 30px;
  height: 30px;
`;

CartIcon.Number = styled.span`
  position: absolute;
  font-size: 13px;
  font-weight: bold;
  bottom: 12px;
`;
