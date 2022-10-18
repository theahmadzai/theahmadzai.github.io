/** @jsx jsx */
import { jsx, useThemeUI, Grid, Box, Heading, Link, Text } from 'theme-ui'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import { Github, Twitter, LinkedIn } from '../components/svg'

const IndexPage = () => {
  const { theme } = useThemeUI()

  return (
    <Layout>
      <Grid marginTop={4} columns={[1, '1fr 3fr']}>
        <Box p={2}>
          <StaticImage
            src="../images/profile.png"
            alt="Muhammad Javed"
            placeholder="tracedSVG"
            sx={{
              display: 'block',
              width: '200px',
              borderRadius: '100%',
              marginBottom: '1rem',
              border: `2px solid ${theme.colors.primary}`,
            }}
          />
          <Heading as="h1" sx={{ fontSize: '1.5rem' }}>
            Muhammad Javed
          </Heading>
          <p>Rawalpindi, Pakistan</p>
          <p>Software Engineer</p>
          <p>Per Diem Subscriptions Inc.</p>
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
            Subscriptions Inc. I have good grasp of JavaScript based both
            backend &amp; frontend frameworks, I have hands-on experience in
            modern serverless JAMStack development. I prefer to create fast
            serverless progressive web apps using GraphQL, Gatsby, Nextjs,
            Contentful &amp; faunaDB with modularity and scalability in mind.
          </Text>
        </Box>
      </Grid>
    </Layout>
  )
}

export default IndexPage
