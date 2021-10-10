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
      <div
        sx={{
          margin: '0 auto',
          padding: '1rem 0.5rem',
          '@media screen and (min-width: 1208px)': {
            padding: '1rem calc((100vw - 1200px) / 2)',
          },
        }}
      >
        <Header />
        <main>{children}</main>
      </div>
    </Fragment>
  )
}

export default Layout
