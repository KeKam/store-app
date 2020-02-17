import React from 'react';

import { ErrorBoundary as S } from './error-boundary.styled';

class ErrorBoundary extends React.Component {
  constructor() {
    super();

    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <S.Container>
          <S.Image imageUrl='https://i.imgur.com/lKJiT77.png' />
          <S.Text>A Dog Ate this Page</S.Text>
        </S.Container>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
