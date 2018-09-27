module.exports = {
  siteMetadata: {
    title: 'CuttinScrap',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
    'gatsby-plugin-sass',
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: `CuttinScrap`,
          short_name: `CuttinScrap`,
          start_url: `/`,
          background_color: `#FFFFFF`,
          theme_color: `#0394AF`,
          display: `standalone`,
          icon: `static/img/cuttinscrap.png`, // This path is relative to the root of the site.
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
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [],
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
}
