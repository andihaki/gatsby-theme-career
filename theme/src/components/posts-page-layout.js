import React from "react";
import { graphql } from "gatsby";
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer";

export default function PageTemplate({ data: { mdx } }) {
  console.log("posts-page-layout", mdx);

  return (
    <div>
      <h1>{mdx.frontmatter.title}</h1>
      {/* <MDXRenderer>{mdx.rawBody}</MDXRenderer> */}
      <MDXRenderer>{mdx.body}</MDXRenderer>
    </div>
  );
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        title
      }
      # code {
      body
      # }
      # rawBody
    }
  }
`;
