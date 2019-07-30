module.exports = {
  siteMetadata: {
    title: `OurJobs`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        defaultLayouts: {
          // post: require.resolve("./src/components/posts-page-layout"),
          posts: require.resolve("./src/components/layout"), // only applied to name posts
          default: require.resolve("./src/components/layout")
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        // path: `${__dirname}/content/posts/`
        path: `content/posts/`
        // name: `jobs`,
        // path: `jobs`
      }
    }
  ]
};
