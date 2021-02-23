import React from 'react'
import styles from './Layout.module.css'

const Layout = ({ children }) => {
  return <main className={styles.main}>{children}</main>
}

export default Layout
