import React from 'react'

export default class Product extends React.Component {
  constructor (props) {
    super(props)
  }
  render() {
    const { match } = this.props
    console.log('> Product', match)
    return (
      <div>Product {match.params.id}</div>
    )
  }
}
