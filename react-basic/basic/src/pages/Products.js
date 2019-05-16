import React from 'react'
import { Route, NavLink } from 'react-router-dom'
import Product from './Product'
import { ThemeConsumer } from '../context/ThemeContext'

export default class Products extends React.Component {
  constructor (props) {
    super(props)
  }

  // static contextType = ThemeContext;

  render() {
    const { match } = this.props
    return (
        <ThemeConsumer>
          {
            context => (
              <React.Fragment>
                <div>Products</div>
                <div>
                  <NavLink to={`${match.url}/1`}>Web</NavLink>
                  <NavLink to={`${match.url}/2`}>Mobile</NavLink>
                  <NavLink to={`${match.url}/3`}>AR</NavLink>
                </div>
                <div>
                  <div>
                    Theme: {context.theme}
                  </div>
                  <div>
                    Icon: {context.icon}
                  </div>
                </div>
                <Route path={`${match.path}/:id`} component={Product} />
              </React.Fragment>
            )
          }
        </ThemeConsumer>
    )
  }
}
