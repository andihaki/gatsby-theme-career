const queries = require("./src/utils/algolia");
require("dotenv").config();
module.exports = {
  siteMetadata: {
    title: `OurJobs`,
    description: `Our awesome description about our Company, goes here`,
    logoUrl: `https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=40`,
    workplace: `See how we are still awesome company`,
    videoUrl: `https://www.w3schools.com/html/mov_bbb.mp4`
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
    },
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        queries,
        chunkSize: 10000 // default: 1000
      }
    }
  ]
};
