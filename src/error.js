import React, { PureComponent } from 'react'
import t from 'prop-types'

class ErrorBoundary extends PureComponent {
  state = { hasError: false }

  static propTypes = {
    children: t.func.isRequired
  }

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

// ErrorBoundary.propTypes = {
//   children: t.func.isRequired
// }

export default ErrorBoundary