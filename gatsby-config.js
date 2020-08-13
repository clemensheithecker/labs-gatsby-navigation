module.exports = {
  plugins: [
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Labs Gatsby Nagivation`,
        short_name: `Labs-Nav`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#1C1C1E`,
        display: `browser`,
        icon: `src/images/logo.svg`,
        // ToDo: Change theme_color based on color scheme
        // theme_color_in_head: false,
      },
    },
  ],
}
