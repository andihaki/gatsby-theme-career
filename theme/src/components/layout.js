import React from "react";
import { MDXProvider } from "@mdx-js/react";
import NavBar from "./ui/NavBar";
import RemoveMargin from "./RemoveMargin";
// import Cards from "./ui/cards";
import PostIndex from "./blog-posts";
import styled from "styled-components";

const globalMdx = {
  test: "siip!!"
};
const Test = () => <div>Eeeeee</div>;
const shortcodes = {
  Test
};

const Layout = styled.div`
  max-width: 800px;
  margin: 30px auto 50px auto;
`;

export default ({ children, path }) => (
  <MDXProvider globalMdx={globalMdx} components={shortcodes}>
    <NavBar />
    <RemoveMargin />
    <Layout>{children}</Layout>
    {path === "/" && <PostIndex />}
    {/* <Cards /> */}
  </MDXProvider>
);
