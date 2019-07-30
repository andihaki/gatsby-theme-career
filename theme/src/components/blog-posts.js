import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Cards from "./ui/cards";

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
    <div>
      <h1>Available Jobs: {posts.length}</h1>
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
    </div>
  );
};

export default BlogIndex;
