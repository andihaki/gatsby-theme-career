import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Cards from "./ui/cards";
import styled from "styled-components";

const Layout = styled.div`
  max-width: 800px;
  margin: 0px auto 50px auto;
  display: flex;
  flex-flow: row wrap;
`;

const H1 = styled.h1`
  margin: 0px;
  padding: 0px;
`;

const BlogIndex = () => {
  const data = useStaticQuery(graphql`
    query blogIndex {
      allMdx {
        edges {
          node {
            id
            excerpt
            frontmatter {
              title
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);
  // console.log("!!!!!!!!!!", data);
  const { edges: posts } = data.allMdx;

  return (
    <Layout>
      <H1>Available Jobs: {posts.length}</H1>
      {/* <ul>
        {posts.map(({ node: post }) => (
          <li key={post.id}>
            <Link to={post.fields.slug}>
              <h2>{post.frontmatter.title}</h2>
            </Link>
            <p>{post.excerpt}</p>
          </li>
        ))}
      </ul> */}
      {posts.length && <Cards posts={posts} />}
    </Layout>
  );
};

export default BlogIndex;
