import styled from 'styled-components';

export const CollectionCategoryPage = () => {};

CollectionCategoryPage.Container = styled.div`
  display: flex;
  flex-direction: column;
`;

CollectionCategoryPage.Title = styled.h2`
  font-size: 38px;
  margin: 0 auto 30px;
`;

CollectionCategoryPage.Items = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;

  & > div {
    margin-bottom: 30px;
  }
`;