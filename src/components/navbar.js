/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'
import { Link } from 'gatsby'

const NavLink = props => (
  <Link
    {...props}
    activeClassName="active"
    sx={{ marginRight: '2rem', textDecoration: 'none' }}
  />
)

const Navbar = () => {
  return (
    <Flex as="nav">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/blog">Blog</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </Flex>
  )
}

export default Navbar
