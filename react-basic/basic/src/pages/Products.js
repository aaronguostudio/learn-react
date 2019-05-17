import React from 'react'
import { Route, NavLink } from 'react-router-dom'
import Product from './Product'
import { ThemeContext } from '../context/ThemeContext'

export default class Products extends React.Component {
  constructor (props) {
    super(props)
  }

  render() {
    const { match } = this.props
    let { theme, toggleTheme} = this.context
    return (
      <React.Fragment>
        <div>Products</div>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <div>
          <NavLink to={`${match.url}/1`}>Web</NavLink>
          <NavLink to={`${match.url}/2`}>Mobile</NavLink>
          <NavLink to={`${match.url}/3`}>AR</NavLink>
        </div>
        <div>
          <div>
            Icon: {theme.background}
          </div>
          <div>
            Icon: {theme.icon}
          </div>
          <div>
            Theme: {theme.theme}
          </div>
        </div>
        <Route path={`${match.path}/:id`} component={Product} />
      </React.Fragment>
    )
  }
}

Products.contextType = ThemeContext
