import * as React from 'react'
import { NextPageContext } from 'next'
import { User } from '../interfaces'
import { findData } from '../utils/sample-api'
import ListDetail from '../components/ListDetail'

type Props = {
  item?: User
  errors?: string
}

class InitialPropsDetail extends React.Component<Props> {
  static getInitialProps = async ({ query }: NextPageContext) => {
    console.log('> 1')
    try {
      const { id } = query
      console.log('> id', id)
      const item = await findData(Array.isArray(id) ? id[0] : id)
      return { item }
    } catch (err) {
      return { errors: err.message }
    }
  }

  render() {
    const { item, errors } = this.props

    console.log('>', item)

    if (errors) {
      return (
        <p>
          <span style={{ color: 'red' }}>Error:</span> {errors}
        </p>
      )
    }

    return (
      <div>
        {item && <ListDetail item={item} />}
      </div>
    )
  }
}

export default InitialPropsDetail
