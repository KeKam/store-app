import styled from 'styled-components';

export const ErrorBoundary = () => {};

ErrorBoundary.Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60vh;
  width: 100%;
`;

ErrorBoundary.Image = styled.div`
  display: inline-block;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-size: cover;
  background-position: center;
  width: 40vh;
  height: 40vh;
`;

ErrorBoundary.Text = styled.h2`
  font-size: 28px;
  color: black;
`;
