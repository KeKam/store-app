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
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;
  }
`;

Header.Logo = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
  border: 1px solid black;

  @media screen and (max-width: 800px) {
    width: 50px;
    padding: 0;
  }
`;

Header.Options = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 50%;
  height: 100%;

  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;

Header.Option = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;
