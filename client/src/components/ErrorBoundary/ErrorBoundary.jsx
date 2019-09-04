import React from 'react';

import { ErrorImageContainer, ErrorImageOverlay, ErrorImageText } from './ErrorBoundaryStyles';

class ErrorBoundary extends React.Component {
  constructor() {
    super();

    this.state = {
      hasErrored: false
    }
  }

  static getDerivedStateFromError(error) {
    return { hasErrored: true };
  }

  componentDidCatch(error, info) {
    console.log(error)
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer  imageUrl='https://i.imgur.com/Q2BAOd2.png' />
          <ErrorImageText>We seem to have lost our way</ErrorImageText>
        </ErrorImageOverlay>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary;