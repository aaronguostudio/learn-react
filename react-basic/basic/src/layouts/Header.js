import React from 'react'
import { ThemeContext } from '../context/ThemeContext'
import logProps from '../components/hoc/logProps'
import styles from './Layout.module.css'

function Header (props, context) {
  return (
    <ThemeContext.Consumer>
      {
        ({ theme }) => (
          <header className={styles.header} style={{display: 'flex'}}>
            <div>Header</div>
            <div>BG from contextType: {theme.background}</div>
            <div>Icon from contextType: {theme.icon}</div>
            <div>Theme from contextType: {theme.theme}</div>
          </header>
        )
      }
    </ThemeContext.Consumer>
  )
}

export default logProps(Header)
