module.exports = {
  siteMetadata: {
    title: `Gatsby MDX Kitchen Sink`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        defaultLayouts: {
          posts: require.resolve("./src/components/post-layout"), // only applied to name posts
          default: require.resolve("./src/components/layout")
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`
      }
    }
  ]
};
