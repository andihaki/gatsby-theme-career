import React from "react";
import styled, { createGlobalStyle } from "styled-components";
// import PostIndex from "../components/blog-posts";
// query blog post list
import { Link, graphql } from "gatsby";

const Styled = styled.div`
  color: tomato;
`;

const MakeItBlack = createGlobalStyle`
  body {
    background-color: #000
  }
`;
const PostIndex = a => {
  const { data } = a;
  console.log("!!!!!!!!!!", data, a);
  const { edges: posts } = data.allMdx;

  return (
    <Styled>
      <MakeItBlack />
      <h1>Home Page</h1>

      <pre>Big Image profile / typing js</pre>

      <div>Portofolio</div>
      <h1>Blog posts</h1>
      <ul>
        {posts.map(({ node: post }) => (
          <li key={post.id}>
            <Link to={post.fields.slug}>
              <h2>{post.frontmatter.title}</h2>
            </Link>
            <p>{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </Styled>
  );
};

export const pageQuery = graphql`
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
`;
// -end

// const Index = () => (
//   <Styled>
//     <MakeItBlack />
//     <h1>Home Page</h1>

//     <pre>Big Image profile / typing js</pre>

//     <div>Portofolio</div>

//     <div>Blog list</div>
//     <PostIndex />
//   </Styled>
// );
export default PostIndex;