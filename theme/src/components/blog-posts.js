// import React from "react";
// import { Link, graphql } from "gatsby";

// const BlogIndex = data => {
//   console.log("!!!!!!!!!!", data);
//   // const { edges: posts } = data.allMdx;
//   const posts = [
//     {
//       node: {
//         id: "4af198a6-3a2b-5b7b-8115-ce83422ebd32",
//         excerpt: "Trying out MDX",
//         frontmatter: {
//           title: "Blog Post 1"
//         },
//         fields: {
//           slug: "/blog/blog-1/"
//         }
//       }
//     },
//     {
//       node: {
//         id: "aa6f361e-e156-5025-9e1f-98df795a8cbf",
//         excerpt: "test from posts",
//         frontmatter: {
//           title: "siip"
//         },
//         fields: {
//           slug: "/blog/ip/"
//         }
//       }
//     }
//   ];

//   return (
//     <div>
//       <h1>Blog posts</h1>
//       <ul>
//         {posts.map(({ node: post }) => (
//           <li key={post.id}>
//             <Link to={post.fields.slug}>
//               <h2>{post.frontmatter.title}</h2>
//             </Link>
//             <p>{post.excerpt}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export const pageQuery = graphql`
//   query blogIndex {
//     allMdx {
//       edges {
//         node {
//           id
//           excerpt
//           frontmatter {
//             title
//           }
//           fields {
//             slug
//           }
//         }
//       }
//     }
//   }
// `;

// export default BlogIndex;
