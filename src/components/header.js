/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'
import Navbar from './navbar'
import ThemeChanger from './theme-changer'

const Header = () => {
  return (
    <Flex
      as="header"
      sx={{
        alignItems: 'center',
        justifyContent: 'space-between',
        background: theme => theme.colors.background,
        borderBottom: theme => `2px solid ${theme.colors.primary}`,
        paddingY: '.5rem',
      }}
    >
      <Navbar />
      <ThemeChanger />
    </Flex>
  )
}

export default Header
