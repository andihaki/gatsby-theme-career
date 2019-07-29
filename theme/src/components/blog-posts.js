import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";

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
    </div>
  );
};

export default BlogIndex;
