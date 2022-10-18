/** @jsx jsx */
import { jsx, Box, Heading } from 'theme-ui'
import Layout from '../components/layout'

const NotFoundPage = () => {
  return (
    <Layout>
      <Box marginTop={4}>
        <Heading as="h1" mb={3}>
          Not found
        </Heading>
      </Box>
    </Layout>
  )
}

export default NotFoundPage
