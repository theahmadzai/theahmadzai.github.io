const path = require('path')

module.exports = {
  siteMetadata: {
    name: 'Muhammad Javed',
    url: 'https://theahmadzai.me',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, 'src', 'images'),
      },
    },
  ],
}
