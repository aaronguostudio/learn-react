import React from 'react'
import { ThemeContext } from '../context/ThemeContext'

export default class Product extends React.Component {
  mockError = () => { throw new Error('mock error') }
  render() {
    let { theme } = this.context
    const { match } = this.props
    if (match.params.id === '3') this.mockError()
    return (
      <React.Fragment>
        <div>Product {match.params.id}</div>
        <div>Background from contextType: {theme.background}</div>
        <div>Icon from contextType: {theme.icon}</div>
        <div>Theme from contextType: {theme.theme}</div>
      </React.Fragment>
    )
  }
}

Product.contextType = ThemeContext
