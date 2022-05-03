const path = require('path');

const gatsbyRequiredRules = path.join(
  process.cwd(),
  'node_modules',
  'gatsby',
  'dist',
  'utils',
  'eslint-rules',
);

module.exports = {
  siteMetadata: {
    title: 'tenacious-hare',
    siteUrl: 'https://www.yourdomain.tld',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        failOnError: false,
        rulePaths: [gatsbyRequiredRules],
        stages: ['develop'],
        extensions: ['js', 'jsx'],
        exclude: ['node_modules', 'bower_components', '.cache', 'public'],
      },
    },
    {
      resolve: 'gatsby-source-datocms',
      options: {
        apiToken: '994a1d7dc29e4521c12f23d4b10dbb',
      },
    },
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'G-9P54HN0QML',
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/assets/images/icon.png',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/assets/images/',
      },
      __key: 'images',
    },

    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        assets: path.join(__dirname, 'src', 'assets'),
        components: path.join(__dirname, 'src', 'components'),
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'Plus Jakarta Sans\:300,400,500,700',
        ],
        display: 'swap',
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets\/icons-components/,
        },
      },
    },
  ],
};
