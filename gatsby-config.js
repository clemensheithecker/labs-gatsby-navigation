module.exports = {
  siteMetadata: {
    title: "Gatsby Navigation",
    titleTemplate: "%s - Gatsby Nav",
    description:
      "A navigation menu built with Gatsby including global dark mode",
    url: "https://labs.clemensheithecker.dev/gatsby-navigation",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Labs Gatsby Nagivation`,
        short_name: `Labs-Nav`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#000`,
        display: `browser`,
        icon: `src/images/icon.png`,
        theme_color_in_head: false,
        include_favicon: false,
      },
    },
    `gatsby-plugin-emotion`,
  ],
}
