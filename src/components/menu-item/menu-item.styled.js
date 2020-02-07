import styled from 'styled-components';

export const MenuItem = () => {};

MenuItem.Container = styled.div`
  display: flex;
  justify-content: center;
  min-width: 45%;
  height: 380px;
  flex: 1 1 auto;
  align-items: center;
  border: 1px solid #e8eaed;
  margin: 0 7.5px 15px;
  overflow: hidden;

  &:hover {
    cursor: pointer;
  }

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }

  @media screen and (max-width: 800px) {
    height: 200px;
    min-width: 50%;
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

  @media screen and (max-width: 800px) {
    ${MenuItem.Container}:hover & {
      transform: unset;
      transition: unset;
    }
  }
`;

MenuItem.Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 90px;
  padding: 0 45px;
  align-items: center;
  border: 1px solid #e8eaed;
  background: #202124;
  color: #e8eaed;
  opacity: 0.7;
  position: absolute;

  ${MenuItem.Container}:hover & {
    opacity: 0.9;
  }

  @media screen and (max-width: 800px) {
    height: 80px;
    padding: 0 15px;
    opacity: 0.9;
  }
`;

MenuItem.Title = styled.div`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 6px;

  @media screen and (max-width: 800px) {
    font-size: 18px;
  }
`;

MenuItem.Subtitle = styled.div`
  font-size: 16px;
  font-weight: bold;
`;
