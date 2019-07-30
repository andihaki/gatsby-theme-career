import React from "react";
import { MDXProvider } from "@mdx-js/react";
import NavBar from "./ui/NavBar";
import RemoveMargin from "./RemoveMargin";
// import Cards from "./ui/cards";
import PostIndex from "./blog-posts";

const globalMdx = {
  test: "siip!!"
};
const Test = () => <div>Eeeeee</div>;
const shortcodes = {
  Test
};

export default ({ children }) => (
  <MDXProvider globalMdx={globalMdx} components={shortcodes}>
    <NavBar />
    <RemoveMargin />
    <div>{children}</div>
    <PostIndex />
    {/* <Cards /> */}
  </MDXProvider>
);
