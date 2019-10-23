import styled from 'styled-components';

export const HomePage = () => {};

HomePage.Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 80px;
`;

HomePage.Menu = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
`;

HomePage.Item = styled.div`
  display: flex;
  justify-content: center;
  min-width: 30%;
  height: 240px;
  flex: 1 1 auto;
  align-items: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
`;

HomePage.Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 90px;
  padding: 0 25px;
  align-items: center;
  border: 1px solid black;
`;

HomePage.Title = styled.h1`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 6px;
`;

HomePage.Subtitle = styled.span`
  font-size: 16px;
  font-weight: lighter;
`;
