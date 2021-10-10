/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'

const NavLink = props => (
  <Link
    {...props}
    activeClassName="active"
    sx={{
      marginRight: '1rem',
      textDecoration: 'none',
      color: 'inherit',
      '&.active': { color: 'primary' },
    }}
  />
)

const Navbar = () => {
  return (
    <nav sx={{ display: 'flex' }}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/blog">Blog</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </nav>
  )
}

export default Navbar
