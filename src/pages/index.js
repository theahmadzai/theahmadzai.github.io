/** @jsx jsx */
import { jsx, useThemeUI } from 'theme-ui'
import Layout from '../components/layout'
import ThemeChanger from '../components/theme-changer'

const IndexPage = () => {
  const { theme, colorMode } = useThemeUI()

  return (
    <Layout>
      <ThemeChanger />
      <div sx={{ background: theme.colors.background }}>{colorMode}</div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum maiores
        sit sequi omnis pariatur est nesciunt maxime quasi quisquam similique,
        doloribus consequatur perferendis aliquid atque nemo labore, doloremque,
        ea quas?
      </div>
    </Layout>
  )
}

export default IndexPage
