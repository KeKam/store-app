import styled from 'styled-components';

export const CollectionPreview = () => {};

CollectionPreview.Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  @media screen and (max-width: 800px) {
    align-items: center;
  }
`;

CollectionPreview.Title = styled.h1`
  font-size: 28px;
  color: #e8eaed;
  width: 10%;
  margin-bottom: 25px;
  cursor: pointer;
  letter-spacing: 4px;
  transition: all 0.5s ease;

  &:hover {
    color: grey;
  }

  @media screen and (max-width: 800px) {
    display: flex;
    justify-content: center;
    width: 50%;
  }
`;

CollectionPreview.Preview = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 15px;
  }
`;
