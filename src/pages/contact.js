/** @jsx jsx */
import {
  jsx,
  useThemeUI,
  Box,
  Heading,
  Label,
  Input,
  Textarea,
  Button,
} from 'theme-ui'
import Layout from '../components/layout'

const ContactPage = () => {
  const { theme } = useThemeUI()

  return (
    <Layout>
      <Box
        as="form"
        onSubmit={e => e.preventDefault()}
        marginTop={4}
        marginX={'auto'}
        p={4}
        sx={{
          width: [null, null, '40rem'],
          border: `2px solid ${theme.colors.primary}`,
        }}
      >
        <Heading as="h1" mb={4}>
          Message Me
        </Heading>

        <Label htmlFor="name">Name</Label>
        <Input type="text" name="name" id="name" mb={3} />

        <Label htmlFor="email">Email</Label>
        <Input type="text" name="email" id="email" mb={3} />

        <Label htmlFor="message">Message</Label>
        <Textarea name="message" id="message" rows={6} mb={3} />

        <Button>Submit</Button>
      </Box>
    </Layout>
  )
}

export default ContactPage
