import styled from 'styled-components';

export const CollectionItem = () => {};

CollectionItem.Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 22%;
  height: 350px;
`;

CollectionItem.Image = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

CollectionItem.Footer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  width: 100%;
  height: 5%;
`;

CollectionItem.Title = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

CollectionItem.Text = styled.span`
  width: 10%;
`;
