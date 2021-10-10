const path = require('path')

const SITE_URL = 'https://theahmadzai.me'

module.exports = {
  siteMetadata: {
    name: 'Muhammad Javed',
    url: SITE_URL,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-theme-ui',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, 'src', 'images'),
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: SITE_URL,
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify',
  ],
}
