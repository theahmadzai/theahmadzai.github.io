import React, { Fragment } from 'react'
import { useThemeUI } from 'theme-ui'

const PageHead = () => {
  const { theme } = useThemeUI()

  return (
    <Fragment>
      <title>Theahmadzai</title>
      <meta name="theme-color" content={theme.colors.primary} />
    </Fragment>
  )
}

export default PageHead
