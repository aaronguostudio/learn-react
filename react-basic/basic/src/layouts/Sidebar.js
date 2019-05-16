import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Layout.module.css'

export default function Header () {
  return (
    <div className={styles.sidebar}>
      <div>
        <NavLink exact activeClassName="link-active" to="/">Home</NavLink>
      </div>
      <div>
        <NavLink activeClassName="link-active" to="/products">Products</NavLink>
      </div>
      <div>
        <NavLink exact activeClassName="link-active" to="/about">About</NavLink>
      </div>
    </div>
  )
}
