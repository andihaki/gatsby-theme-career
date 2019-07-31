import React from "react";
import { graphql } from "gatsby";
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer";
import NavBar from "./ui/NavBar";
import RemoveMargin from "./RemoveMargin";
import styled from "styled-components";

import logo from "../icons/function.svg";
import location from "../icons/location.svg";

const Layout = styled.div`
  max-width: 800px;
  margin: 30px auto 50px auto;
  display: flex;
  line-height: 1.75rem;
`;

const Left = styled.div`
  background-color: tomato;
  min-width: 550px;
  padding-left: 20px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

const Right = styled.div`
  background-color: aliceblue;
  min-width: 250px;
  padding-left: 30px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  line-height: 3rem;
`;

const ImgFunction = styled.img`
  margin-right: 3px;
`;
const ImgLocation = styled.img`
  margin-left: 4px;
  margin-right: 6px;
`;

export default function PageTemplate({ data: { mdx } }) {
  console.log("posts-page-layout", mdx);

  return (
    <div>
      <NavBar />
      <RemoveMargin />
      <Layout>
        <Left>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </Left>
        <Right>
          <h1>{mdx.frontmatter.title}</h1>
          <div>
            <ImgFunction src={logo} alt="Logo" />

            {mdx.frontmatter.function}
          </div>
          <div>
            <ImgLocation src={location} alt="Logo" />
            {mdx.frontmatter.location}
          </div>
          <div>
            <a
              href={
                "mailto:" +
                mdx.frontmatter.apply +
                "?subject=" +
                mdx.frontmatter.title
              }
              type="button"
            >
              <button type="submit">Apply</button>
            </a>
          </div>
        </Right>
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
        function
        location
        apply
      }
      body
    }
  }
`;
