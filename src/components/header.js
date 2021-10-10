/** @jsx jsx */
import { jsx, useThemeUI } from 'theme-ui'
import Navbar from './navbar'
import ThemeChanger from './theme-changer'

const Header = () => {
  const { theme } = useThemeUI()

  return (
    <header
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: theme.colors.background,
        borderBottom: `3px solid ${theme.colors.primary}`,
        paddingY: '.5rem',
      }}
    >
      <Navbar />
      <ThemeChanger />
    </header>
  )
}

export default Header
