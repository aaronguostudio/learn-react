import React from 'react'
import { ThemeContext } from '../context/ThemeContext'
export default class Home extends React.Component {
  render() {
    let { user } = this.context
    return (
      <React.Fragment>
        <div>Home</div>
        <div>
          { user.name }
        </div>
        <div>
          { user.phone }
        </div>
        <div>
          { user.email }
        </div>
      </React.Fragment>
    )
  }
}

Home.contextType = ThemeContext