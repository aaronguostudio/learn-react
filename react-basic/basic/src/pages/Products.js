import React from 'react'
import { Route, NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import { loadProduct } from '../services/product/actions'

import Product from './Product'
import { ThemeContext } from '../context/ThemeContext'
import ErrorBoundary from '../components/ErrorBoundary'

class Products extends React.Component {
  constructor (props) {
    super(props)
  }
  
  componentDidMount () {
    console.log('>>props', this.props.products)
  }

  products = this.props.products.map(p => (
    <NavLink key={p.id} to={`${this.props.match.url}/${p.id}`}>{p.name}</NavLink>
  ))

  render() {
    const { match } = this.props
    let { theme, toggleTheme} = this.context
    return (
      <React.Fragment>
        <div>Products</div>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <div>
          { this.products }
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
        <ErrorBoundary>
          <Route path={`${match.path}/:id`} component={Product} />
        </ErrorBoundary>
      </React.Fragment>
    )
  }
}

Products.contextType = ThemeContext

const mapStateToProps = state => ({
  products: state.product.products
})

export default connect(
  mapStateToProps,
  { loadProduct }
)(Products)
