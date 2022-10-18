/** @jsx jsx */
import { Fragment } from 'react'
import { jsx, Box } from 'theme-ui'
import Header from './header'

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Box
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
      </Box>
    </Fragment>
  )
}

export default Layout
