import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Layout.module.css'

export default function Header () {
  return (
    <div className={styles.sidebar}>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/products">Products</Link>
      </div>
      <div>
        <Link to="/about">About</Link>
      </div>
    </div>
  )
}
