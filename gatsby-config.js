const path = require('path')

module.exports = {
  siteMetadata: {
    name: 'Muhammad Javed',
    url: 'http://theahmadzai.me',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, 'src', 'images'),
      },
    },
  ],
}
