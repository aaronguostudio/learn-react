import React from 'react'

export default function logProps (WrappedComponent) {
  return class extends React.Component {
    componentWillMount () {
      console.log('Component mounted')
    }
    componentWillReceiveProps (nextProps) {
      console.log('> current props', this.props)
      console.log('> next props', this.nextProps)
    }
    render () {
      return <WrappedComponent {...this.props} />
    }
  }
}
