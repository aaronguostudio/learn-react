import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import styles from './Layout.module.css'

export default class DefaultLayout extends React.Component {
  render () {
    return (
      <div className={styles.container}>
        <Header />
        <div className={styles.main}>
          <Sidebar />
          <div className={styles.content}>{this.props.children}</div>
        </div>
      </div>
    )
  }
}
