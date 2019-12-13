import styled from 'styled-components';

import Button from '../button/button';

export const CollectionItem = () => {};

CollectionItem.Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 22vw;
  height: 350px;
  position: relative;
`;

CollectionItem.Image = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};

  ${CollectionItem.Container}:hover & {
    opacity: 0.7;
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
  width: 80%;
  opacity: 0.6;

  ${CollectionItem.Container}:hover & {
    display: flex;
    opacity: 0.75;
  }
`;

CollectionItem.Title = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

CollectionItem.Text = styled.span`
  width: 10%;
`;
