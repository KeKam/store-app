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
  overflow: hidden;

  &:hover {
    cursor: pointer;
  }
`;

MenuItem.Image = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};

  ${MenuItem.Container}:hover & {
    transform: scale(1.1);
    transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
  }
`;

MenuItem.Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 90px;
  padding: 0 25px;
  align-items: center;
  border: 1px solid black;
  background: white;
  opacity: 0.7;
  position: absolute;

  ${MenuItem.Container}:hover & {
    opacity: 0.9;
  }
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
