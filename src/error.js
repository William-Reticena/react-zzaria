import React, { PureComponent } from 'react'

class ErrorBoundary extends PureComponent {
  state = { hasError: false }

  static getDerivedStateFromError () {
    return { hasError: true }
  }

  componentDidCatch (error, info) {
    console.log('error:', error)
  }

  render () {
    return this.props.children(this.state.hasError)
  }
}

export default ErrorBoundary