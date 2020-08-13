import styled from 'styled-components';

export const CollectionCategoryPage = () => {};

CollectionCategoryPage.Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

CollectionCategoryPage.Title = styled.h2`
  font-size: 28px;
  margin: 18.76px auto 25px;
  color: #e8eaed;
  letter-spacing: 4px;
`;

CollectionCategoryPage.Items = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 0.5px;

  & > div {
    margin-bottom: 30px;
  }

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-gap: 40px;

    & > div {
      margin-bottom: 0px;
    }
  }
`;
