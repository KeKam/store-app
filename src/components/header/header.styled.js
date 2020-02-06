import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = () => {};

Header.Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 70px;
  width: 100%;
  margin-bottom: 25px;

  @media screen and (max-width: 800px) {
    display: block;
    height: 60px;
    padding: 10px;
    margin-bottom: 50px;
  }
`;

Header.Logo = styled(Link)`
  display: flex;
  align-items: center;
  height: 100%;
  width: 50%;

  @media screen and (max-width: 800px) {
    width: 100%;
    justify-content: center;
    margin-bottom: 10px;
  }
`;

Header.Options = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 50%;
  height: 100%;

  @media screen and (max-width: 800px) {
    width: 100%;
    justify-content: center;
  }
`;

Header.Option = styled(Link)`
  font-weight: bold;
  letter-spacing: 5px;
  padding: 10px 15px;
  cursor: pointer;

  @media screen and (max-width: 800px) {
    font-size: 12px;
    letter-spacing: 0;
  }
`;

Header.LogoText = styled.div`
  font-size: 30px;
  font-family: 'Gruppo', cursive;
  font-weight: bold;
  padding: 10px 0;
`;

Header.LogoNumber = styled(Header.LogoText)`
  font-size: 35px;
  font-family: 'Courgette', cursive;
  font-weight: bold;
  margin-right: 5px;
`;
