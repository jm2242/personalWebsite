module.exports = {
  siteMetadata: {
    siteUrl: 'https://jonathanmares.com',
    title: 'Jonathan Mares',
    author: 'Jonathan Mares',
    description: 'Personal website and blog on technology, motorcycles, and more.',
    facebookAppId: '1373234856114390',
    twitterUser: 'jmares93',
    disqusShortName: "jonathanmares",
    social: {
      githubUrl: 'https://github.com/jm2242',
      keybaseUrl: 'https://keybase.io/jmares',
      linkedInUrl: 'https://www.linkedin.com/in/jonathanmares/',
      twitterUrl: 'https://twitter.com/jmares93',
    },
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        showSpinner: false,
      },
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.js',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/img`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-autolink-headers',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 740,
              linkImagesToOriginal: false,
              backgroundColor: 'transparent',
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              showLineNumbers: true
            },
          },
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    'gatsby-plugin-catch-links',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-68970606-1',
      },
    },
    'gatsby-plugin-feed',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Jonathan Mares',
        short_name: 'Jonathan Mares',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#5C6BC0',
        display: 'minimal-ui',
        icons: [
          {
            src: '/favicons/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/favicons/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify',
  ],
};
