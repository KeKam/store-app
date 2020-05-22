import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = () => {};

Header.Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${(props) => (props.hasScrolledDown ? '0px' : '20px 60px 0px 60px')};
  transition: all 0.5s ease;
  top: 0;
  z-index: 1;
  position: fixed;
  height: 70px;
  width: 100%;
  margin-bottom: 25px;

  a {
    color: ${(props) => (props.hasScrolledDown ? '#202124' : '#e8eaed')};
  }

  @media screen and (max-width: 800px) {
    display: block;
    height: 60px;
    padding: 0px 0px 15px 0px;
    margin-bottom: 50px;
  }
`;

Header.LogoContainer = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px groove #e8eaed;
  background-color: ${(props) =>
    props.hasScrolledDown ? '#e8eaed' : 'transparent'};
  transition: all 0.5s ease;
  height: 100%;
  width: 50%;

  @media screen and (max-width: 800px) {
    width: 100%;
    justify-content: center;
    border-bottom: none;
    padding-top: 10px;
  }
`;

Header.Options = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-bottom: 1px groove #e8eaed;
  background-color: ${(props) =>
    props.hasScrolledDown ? '#e8eaed' : 'transparent'};
  transition: all 0.5s ease;
  width: 50%;
  height: 100%;

  @media screen and (max-width: 800px) {
    width: 100%;
    justify-content: center;
  }
`;

Header.Option = styled(Link)`
  font-weight: bold;
  letter-spacing: 4px;
  padding: 10px 15px;
  transition: all 0.5s ease;
  cursor: pointer;

  &:hover {
    color: grey;
  }

  @media screen and (max-width: 800px) {
    font-size: 13px;
    letter-spacing: 0;
  }
`;

Header.Logo = styled(Link)`
  display: flex;
  align-items: center;
  transition: all 0.5s ease;

  &:hover {
    color: grey;
  }
`;

Header.LogoText = styled.div`
  font-size: 30px;
  font-family: 'Gruppo', cursive;
  font-weight: bold;
  padding: 10px 0;
`;

Header.LogoNumber = styled.div`
  font-size: 35px;
  font-family: 'Courgette', cursive;
  font-weight: bold;
  padding: 10px 0;
  margin: ${(props) =>
    props.hasScrolledDown ? '0px 5px 0px 25px' : '0px 5px 0px 0px'};
  @media screen and (max-width: 800px) {
    margin: 0px 5px 0px 0px;
  }
`;
