import styled from 'styled-components';

export const Directory = () => {};

Directory.Container = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 100px;
  padding: 0px 60px;

  @media screen and (max-width: 800px) {
    padding: 0px 10px;
    margin-top: 110px;
  }
`;
