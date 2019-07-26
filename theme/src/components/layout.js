import React from "react";
import { MDXProvider } from "@mdx-js/react";
import NavBar from "./ui/NavBar";

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
    <div>{children}</div>
  </MDXProvider>
);
