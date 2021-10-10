/** @jsx jsx */
import { jsx, useThemeUI } from 'theme-ui'
import { Fragment } from 'react'
import { Helmet } from 'react-helmet'

const Layout = ({ children }) => {
  const { theme } = useThemeUI()

  return (
    <Fragment>
      <Helmet>
        <meta name="theme-color" content={theme.colors.primary} />
      </Helmet>
      <main
        sx={{
          width: '70vw',
          margin: '0 auto',
        }}
      >
        {children}
      </main>
    </Fragment>
  )
}

export default Layout
