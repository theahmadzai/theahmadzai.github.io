/** @jsx jsx */
import { jsx, Themed } from 'theme-ui'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <Layout>
      <div sx={{ display: 'flex', flexDirection: 'column', paddingY: '2rem' }}>
        <StaticImage
          src="../images/profile.png"
          alt="Muhammad Javed"
          placeholder="tracedSVG"
          layout="fixed"
          height="200"
          sx={{ borderRadius: '100%' }}
        />
        <Themed.h3>Muhammad Javed</Themed.h3>
      </div>
    </Layout>
  )
}

export default IndexPage
