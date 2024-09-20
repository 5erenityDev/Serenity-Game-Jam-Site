/**
 * @type {import('gatsby').GatsbyConfig}
 */
jamsPath = __dirname + '/jams';
module.exports = {
  siteMetadata: {
    title: "Serenity Jam",
    author: "Sean Blankenship"
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: 'jams',
        path: jamsPath,
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
  ],
};