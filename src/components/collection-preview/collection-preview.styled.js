import styled from 'styled-components';

export const CollectionPreview = () => {};

CollectionPreview.Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

CollectionPreview.Title = styled.h1`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;
`;

CollectionPreview.Preview = styled.div`
  display: flex;
  justify-content: space-between;
`;
