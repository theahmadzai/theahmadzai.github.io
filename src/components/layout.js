/** @jsx jsx */
import { jsx, useThemeUI } from 'theme-ui'
import { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import Header from './header'

const Layout = ({ children }) => {
  const { theme } = useThemeUI()

  return (
    <Fragment>
      <Helmet>
        <meta name="theme-color" content={theme.colors.primary} />
      </Helmet>
      <div sx={{ width: '70vw', margin: '0 auto' }}>
        <Header />
        <main>{children}</main>
      </div>
    </Fragment>
  )
}

export default Layout
