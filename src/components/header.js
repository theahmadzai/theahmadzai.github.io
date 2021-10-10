/** @jsx jsx */
import { jsx, useThemeUI, Flex } from 'theme-ui'
import Navbar from './navbar'
import ThemeChanger from './theme-changer'

const Header = () => {
  const { theme } = useThemeUI()

  return (
    <Flex
      as="header"
      sx={{
        alignItems: 'center',
        justifyContent: 'space-between',
        background: theme.colors.background,
        borderBottom: `2px solid ${theme.colors.primary}`,
        paddingY: '.5rem',
      }}
    >
      <Navbar />
      <ThemeChanger />
    </Flex>
  )
}

export default Header
