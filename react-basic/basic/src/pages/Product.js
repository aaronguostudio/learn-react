import React from 'react'
import { ThemeContext } from '../context/ThemeContext'

export default class Product extends React.Component {
  constructor (props) {
    super(props)
  }
  render() {
    let themeObj = this.context
    console.log('>>>>themeObj', themeObj)
    const { match } = this.props
    console.log('> Product', match)
    return (
      <React.Fragment>
        <div>Product {match.params.id}</div>
        <div>Theme from contextType: {themeObj.theme}</div>
        <div>Icon from contextType: {themeObj.icon}</div>
      </React.Fragment>
    )
  }
}

Product.contextType = ThemeContext
