import styled from 'styled-components';

export const MenuItem = () => {};

MenuItem.Container = styled.div`
  display: flex;
  justify-content: center;
  min-width: 30%;
  height: ${({ size }) => (size ? '380px' : '300px')};
  flex: 1 1 auto;
  align-items: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  background: url(${props => props.imageUrl});
  background-position: center;
  background-size: cover;
`;

MenuItem.Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 90px;
  padding: 0 25px;
  align-items: center;
  border: 1px solid black;
`;

MenuItem.Title = styled.div`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 6px;
`;

MenuItem.Subtitle = styled.div`
  font-size: 16px;
  font-weight: lighter;
`;
