/** @jsx jsx */
import { jsx, Box, Heading, Label, Input, Textarea, Button } from 'theme-ui'
import Layout from '../components/layout'

const ContactPage = () => {
  const handleSubmit = e => {
    e.preventDefault()
  }

  return (
    <Layout>
      <Box
        as="form"
        marginTop={4}
        p={4}
        sx={{
          borderRadius: 11,
          border: theme => `2px solid ${theme.colors.primary}`,
        }}
        onSubmit={handleSubmit}
      >
        <Heading as="h1" mb={3}>
          Contact
        </Heading>

        <Label htmlFor="name">Name</Label>
        <Input
          type="text"
          name="name"
          id="name"
          placeholder="Full Name"
          mb={3}
        />

        <Label htmlFor="email">Email Address</Label>
        <Input
          type="text"
          name="email"
          id="email"
          placeholder="Email Address"
          mb={3}
        />

        <Label htmlFor="message">Message</Label>
        <Textarea
          name="message"
          id="message"
          placeholder="Message..."
          rows={6}
          mb={3}
        />

        <Button>Submit</Button>
      </Box>
    </Layout>
  )
}

export default ContactPage
