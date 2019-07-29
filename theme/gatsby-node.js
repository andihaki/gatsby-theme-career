// create folder if not exist
const fs = require("fs");
exports.onPreBootstrap = ({ reporter }) => {
  const contentPath = "src/posts";

  // if folder not exist, then create it
  if (!fs.existsSync(contentPath)) {
    reporter.info(`creating ${contentPath} directory`);
    fs.mkdirSync(contentPath);
  }
};

const { createFilePath } = require("gatsby-source-filesystem");
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  // console.log("@@@@@@@@", node.internal.type);

  if (node.internal.type === "Mdx") {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: "slug",
      node,
      value: `/blog${value}`
    });
  }
};

const path = require("path");
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
            component: path.resolve("./src/components/posts-page-layout.js"),
            // context = can be used at page layout component
            context: { id: node.id }
          });
        });
      })
    )
  );
};
