import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Cards from "./ui/cards";
import styled from "styled-components";

const Layout = styled.div`
  max-width: 800px;
  margin: 0px auto 50px auto;
`;

const H1 = styled.h1`
  margin: 0px;
  padding: 0px;
`;

const JobsList = () => {
  const data = useStaticQuery(graphql`
    query jobsList {
      allMdx {
        edges {
          node {
            id
            excerpt
            frontmatter {
              title
              function
              location
              apply
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  const { edges: posts } = data.allMdx;

  return (
    <Layout style={{ maxWidth: "800px", margin: "0px auto 50px auto" }}>
      <H1>Available Jobs: {posts.length}</H1>
      {posts.length && <Cards posts={posts} />}
    </Layout>
  );
};

export default JobsList;
