require('dotenv').config()
const path = require('path')

const SITE_URL = 'https://theahmadzai.me'

module.exports = {
  siteMetadata: {
    siteUrl: SITE_URL,
    name: 'Muhammad Javed',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, 'src', 'images'),
      },
      __key: 'images',
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-theme-ui',
      options: {
        preset: require('./src/theme'),
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: SITE_URL,
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'nil',
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Muhammad Javed',
        short_name: 'Javed',
        start_url: '/',
        background_color: '#000000',
        theme_color: '#FFFFFF',
        display: 'standalone',
        icon: './static/icon.png',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-plugin-image',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-offline',
  ],
}
