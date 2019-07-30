import React from "react";
import { graphql } from "gatsby";
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer";
import NavBar from "./ui/NavBar";
import RemoveMargin from "./RemoveMargin";
import styled from "styled-components";

const Layout = styled.div`
  max-width: 800px;
  margin: 0px auto 50px auto;
`;

export default function PageTemplate({ data: { mdx } }) {
  console.log("posts-page-layout", mdx);

  return (
    <div>
      <NavBar />
      <RemoveMargin />
      <Layout>
        <h1>{mdx.frontmatter.title}</h1>
        {/* <MDXRenderer>{mdx.rawBody}</MDXRenderer> */}
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </Layout>
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
