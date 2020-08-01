const path = require(`path`);

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  pathPrefix: "/apm-map",
  plugins: [
    {
      resolve: "gatsby-plugin-material-ui",
      // If you want to use styled components you should change the injection order.
      options: {
        // stylesProvider: {
        //   injectFirst: true,
        // },
      },
    },
    // If you want to use styled components you should add the plugin here.
    // 'gatsby-plugin-styled-components',
    "gatsby-plugin-react-helmet",
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `json`,
        path: `${__dirname}/src/json`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `APM Map`,
        short_name: `APM Map`,
        start_url: `/`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `static/assets/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Montserrat`],
        display: "swap",
      },
    },
    /* need to install plugin{
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: `static/assets/`,
        },
      },
    }, */
  ],
  siteMetadata: {
    title: "APM Map",
  },
};
