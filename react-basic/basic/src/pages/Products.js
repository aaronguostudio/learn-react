import React from 'react'
import { Route, Link } from 'react-router-dom'
import Product from './Product'

export default class Products extends React.Component {
  constructor (props) {
    super(props)
  }
  render() {
    const { match } = this.props
    return (
      <React.Fragment>
        <div>Products</div>
        <div>
          <Link to={`${match.url}/1`}>Components</Link>
          <Link to={`${match.url}/2`}>Components</Link>
          <Link to={`${match.url}/3`}>Components</Link>
        </div>
        <Route path={`${match.path}/:id`} component={Product} />
      </React.Fragment>
    )
  }
}
