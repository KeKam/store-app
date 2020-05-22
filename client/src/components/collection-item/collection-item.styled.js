import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Button from '../button/button';

export const CollectionItem = () => {};

CollectionItem.Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 22vw;
  height: 350px;
  position: relative;
  margin: 0px 10px;

  @media screen and (max-width: 800px) {
    width: 70vw;
  }
`;

CollectionItem.Image = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  border: 1px groove #e8eaed;
  margin-bottom: 5px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  transition: all 0.5s ease;

  ${CollectionItem.Container}:hover & {
    opacity: 0.75;
  }

  @media screen and (max-width: 800px) {
    ${CollectionItem.Container}:hover & {
      opacity: unset;
    }
  }
`;

CollectionItem.Footer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  width: 100%;
  height: 5%;
`;

CollectionItem.Button = styled(Button)`
  display: none;
  position: absolute;
  top: 270px;
  width: 90%;
  opacity: 0.6;

  ${CollectionItem.Container}:hover & {
    display: flex;
    opacity: 0.75;
  }

  @media screen and (max-width: 800px) {
    display: block;
    opacity: 0.8;
    min-width: unset;
    padding: 0;

    ${CollectionItem.Container}:hover & {
      opacity: unset;
    }
  }
`;

CollectionItem.Title = styled.span`
  width: 75%;
  font-weight: bold;
  color: #e8eaed;
`;

CollectionItem.Text = styled.span`
  width: 25%;
  text-align: right;
  font-weight: bold;
  color: #e8eaed;
`;

CollectionItem.SignInButton = styled(Link)`
  display: none;
  position: absolute;
  background: black;
  width: 100%;
  height: 93.7%;
  opacity: 0.5;

  ${CollectionItem.Container}:hover & {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 800px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

CollectionItem.SignInButtonText = styled.h2`
  color: #e8eaed;
  font-size: 25px;
  font-weight: bold;
`;
