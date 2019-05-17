import React from 'react'
import { ThemeContext } from '../context/ThemeContext'

export default class Product extends React.Component {
  render() {
    let themeObj = this.context
    const { match } = this.props
    return (
      <React.Fragment>
        <div>Product {match.params.id}</div>
        <div>Background from contextType: {themeObj.background}</div>
        <div>Icon from contextType: {themeObj.icon}</div>
        <div>Theme from contextType: {themeObj.theme}</div>
      </React.Fragment>
    )
  }
}

Product.contextType = ThemeContext
