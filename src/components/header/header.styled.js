import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = () => {};

Header.Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 70%;
  width: 100%;
  margin-bottom: 25px;
`;

Header.Logo = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
  border: 1px solid black;
`;

Header.Options = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 50%;
  height: 100%;
`;

Header.Option = styled(Link)`
  padding: 10px 15px;
`;
