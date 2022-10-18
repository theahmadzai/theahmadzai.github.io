/** @jsx jsx */
import { useState } from 'react'
import { jsx, useThemeUI, Grid, Box, Heading, Link, Text } from 'theme-ui'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import { Github, Twitter, LinkedIn } from '../components/svg'

const IndexPage = () => {
  const { theme } = useThemeUI()
  const [swapped, swapImages] = useState(false)

  const small = {
    position: 'absolute',
    right: 13,
    bottom: 13,
    width: '40px',
    height: '40px',
    borderRadius: '100%',
    zIndex: 10,
    border: `1px solid ${theme.colors.primary}`,
  }

  const large = {
    position: 'absolute',
    width: '200px',
    borderRadius: '100%',
    marginBottom: '1rem',
    border: `2px solid ${theme.colors.primary}`,
  }

  return (
    <Layout>
      <Grid marginTop={4} columns={[1, '1fr 3fr']}>
        <Box p={2}>
          <Box
            sx={{
              width: '200px',
              height: '200px',
              overflow: 'hidden',
              marginBottom: '1rem',
              position: 'relative',
            }}
          >
            <div
              onClick={() => swapImages(v => !v)}
              onKeyUp={() => swapImages(v => !v)}
              tabIndex={0}
              role="button"
            >
              <StaticImage
                src="https://gravatar.com/avatar/7b3c62974e72da38226c7657c2cb5069?s=800"
                alt="Muhammad Javed"
                placeholder="tracedSVG"
                sx={swapped ? small : large}
              />
            </div>
            <div
              onClick={() => swapImages(v => !v)}
              onKeyUp={() => swapImages(v => !v)}
              tabIndex={-1}
              role="button"
            >
              <StaticImage
                src="https://gravatar.com/avatar/8afecd537241b15296a3151a18b6f9ee?s=800"
                alt="Muhammad Javed"
                placeholder="tracedSVG"
                sx={swapped ? large : small}
                onClick={() => swapImages(v => !v)}
              />
            </div>
          </Box>
          <Heading as="h1" sx={{ fontSize: '1.5rem' }}>
            Muhammad Javed
          </Heading>
          <p>Rawalpindi, Pakistan</p>
          <p>Software Engineer</p>
          <p>Per Diem Subscriptions, Inc.</p>
          <Grid columns={'repeat(3, 2rem)'}>
            <Link
              href="https://github.com/theahmadzai"
              target="_blank"
              rel="noreferrer"
              sx={{ ':hover': { color: theme.colors.primary } }}
            >
              <Github />
            </Link>
            <Link
              href="https://twitter.com/theahmadzai786"
              target="_blank"
              rel="noreferrer"
              sx={{ ':hover': { color: theme.colors.primary } }}
            >
              <Twitter />
            </Link>
            <Link
              href="https://www.linkedin.com/in/theahmadzai"
              target="_blank"
              rel="noreferrer"
              sx={{ ':hover': { color: theme.colors.primary } }}
            >
              <LinkedIn />
            </Link>
          </Grid>
        </Box>
        <Box p={2}>
          <Text sx={{ textAlign: 'justify' }}>
            Javed here, I work as a Full Stack Engineer at Per Diem
            Subscriptions, Inc. I have a good grasp of many JavaScript-based
            backend and frontend frameworks. I have hands-on experience in
            modern serverless JAMStack development. I prefer to create fast
            serverless progressive web apps using GraphQL, Gatsby, Nextjs,
            Contentful and faunaDB with modularity and scalability in mind.
          </Text>
        </Box>
      </Grid>
    </Layout>
  )
}

export default IndexPage
