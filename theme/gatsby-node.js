// create folder if not exist
const fs = require("fs");
exports.onPreBootstrap = ({ reporter }) => {
  const contentPath = "content/posts";

  // if folder not exist, then create it
  if (!fs.existsSync(contentPath)) {
    reporter.info(`creating ${contentPath} directory`);
    fs.mkdirSync(contentPath.split("/")[0]);
    fs.mkdirSync(contentPath);

    // fs.mkdirSync("src/components");
  }
};

const { createFilePath } = require("gatsby-source-filesystem");
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  // console.log("@@@@@@@@", node.internal.type, node.id);

  if (node.internal.type === "Mdx") {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: "slug",
      node,
      // value: `/blog${value}`
      value: `${value}`
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) =>
    resolve(
      graphql(
        `
          {
            allMdx {
              edges {
                node {
                  id
                  fields {
                    slug
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.error("oops", result.errors);
          reject(result.errors);
        }
        // console.log("!!!!!!!!!!", JSON.stringify(result.data.allMdx));
        // create page
        result.data.allMdx.edges.forEach(({ node }) => {
          // console.log("path", node.fields.slug, "context", node.id);
          createPage({
            path: node.fields.slug,
            component: require.resolve("./src/components/posts-page-layout.js"),
            // component: require.resolve("./src/components/layout.js"),
            // context = can be used at page layout component
            context: { id: node.id }
          });
        });
      })
    )
  );
};
